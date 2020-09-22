const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNumber = (2 ** disksNumber) - 1,
    secondsNumber = Math.floor((turnsNumber / turnsSpeed) * 3600);
  return obj = { turns: turnsNumber, seconds: secondsNumber };
}