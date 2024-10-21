const needle = require('needle');
const { readFileSync, writeFileSync } = require('node:fs');

const cid = '1067594218718-jue7kr807nc2nl08f1fpslk8v4mq70qs.apps.googleusercontent.com';
const csec = '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';

function loadToken() {
  return JSON.parse(readFileSync('gd_token.json'))
}

async function refreshAT(rt) {
  const url = 'https://oauth2.googleapis.com/token';
  const data = `client_id=${cid}&client_secret=${csec}&refresh_token=${rt}&grant_type=refresh_token`;
  const res = await needle('post', url, data, {
    header: { content_type: 'application/x-www-form-urlencoded' }
  });
  if (res.statusCode !== 200) throw new Error(JSON.stringify(res.body));

  const newDGToken = { ...loadToken(), at: res.body.access_token };
  writeFileSync('gd_token.json', JSON.stringify(newDGToken));
}

async function getFolders() {
  const { at: accessToken, rt: refreshToken } = loadToken();
  try {
    const url = 'https://www.googleapis.com/drive/v3/files?orderBy=name%20desc&q=%27upload-sm%40release-sider-manager.iam.gserviceaccount.com%27%20in%20owners%20and%20mimeType%20%3D%20%27application%2Fvnd.google-apps.folder%27';
    const res = await needle('get', url, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    if (res.statusCode === 401) {
      refreshAT(refreshToken);
      throw new Error(JSON.stringify(res.body));
    }
    if (res.statusCode !== 200) throw new Error(JSON.stringify(res.body));

    console.dir(res.body.files);
  } catch (err) {
    console.dir(err);
  }
}

getFolders();

console.log('Ini berjalan duluan');
