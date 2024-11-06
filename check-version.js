function checkSmallerThanVersion(currentVersion, latestVersion) {
  const arrCurrent = currentVersion.split('.');
  const arrLatest = latestVersion.split('.');

  // if major current < major latest
  if (parseInt(arrCurrent[0]) < parseInt(arrLatest[0])) {
    return true;
  } else if (parseInt(arrCurrent[0]) === parseInt(arrLatest[0])) {
    // if minor current < minor latest
    if (parseInt(arrCurrent[1]) < parseInt(arrLatest[1])) {
      return true;
    } else if (parseInt(arrCurrent[1]) === parseInt(arrLatest[1])) {
      // if patch current < patch latest
      if (parseInt(arrCurrent[2]) < parseInt(arrLatest[2])) {
        return true;
      }
    }
  }

  return false;
}

console.dir(checkSmallerThanVersion('1.90.0', '2.0.0'));
