const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = '';
  if (Array.isArray(members)) {
    members.sort().forEach((el) => typeof (el) == 'string' ? team += el.trim().toUpperCase().slice(0,1) : false);
  } else {
    return false;
  }
  return team.split('').sort().join('');
};
