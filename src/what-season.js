const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == undefined) return 'Unable to determine the time of year!';

  let year = date.getYear(),
    month = date.getMonth(),
    day = date.getDate();

  if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) return 'Error';

  return month == 11 || month == 0 || month == 1 ? 'winter' : month == 2 || month <= 4 ? 'spring' : month == 5 || month <= 7 ? 'summer' : 'autumn';
};
