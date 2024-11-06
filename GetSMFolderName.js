const needle = require('needle');
const { readFileSync, writeFileSync, existsSync } = require('node:fs');

const cid = '1067594218718-jue7kr807nc2nl08f1fpslk8v4mq70qs.apps.googleusercontent.com';
const csec = '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';
const rt = '1//04XwgAsM6hakgCgYIARAAGAQSNwF-L9Irlw0j6pApykBsA6CzjBvvIzabHe3IXaSCWd3QKA0lNEp7naZDbybj3m4qzwPkslMSsk0';

async function loadAccessToken() {
  if (!existsSync('gd-at.json')) {
    await refreshAT();
  }

  return JSON.parse(readFileSync('gd-at.json'));
}

async function refreshAT() {
  const url = 'https://oauth2.googleapis.com/token';
  const data = `client_id=${cid}&client_secret=${csec}&refresh_token=${rt}&grant_type=refresh_token`;
  const res = await needle('post', url, data, {
    header: { content_type: 'application/x-www-form-urlencoded' }
  });
  if (res.statusCode !== 200) throw new Error(JSON.stringify(res.body));

  const newAccessToken = { at: res.body.access_token };
  writeFileSync('gd-at.json', JSON.stringify(newAccessToken));
}

async function getFolders() {
  const { at: accessToken } = await loadAccessToken();
  try {
    const url = 'https://www.googleapis.com/drive/v3/files?orderBy=name_natural%20desc&q=%27upload-sm%40release-sider-manager.iam.gserviceaccount.com%27%20in%20owners%20and%20mimeType%20%3D%20%27application%2Fvnd.google-apps.folder%27';
    const res = await needle('get', url, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    if (res.statusCode === 401) {
      refreshAT(rt);
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
