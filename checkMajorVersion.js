function checkMajor(decodedActivationKey, app) {
  const activationKeyVersion = decodedActivationKey.version.split('.')[0];
  const appVersion = app.getVersion().split('.')[0];
  // check if MAJOR version in activation_key is equal to MAJOR version from current app
  if (activationKeyVersion !== appVersion) {
    return 'Major tidak sama';
  }
  return 'Major sama';
}

const app = {
  getVersion: function() {
    return '10.100.0';
  },
};

const decodedActivationKey = {
  version: '10.9.0',
};

console.log(checkMajor(decodedActivationKey, app));
