const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let k = 0; k < backyard[i].length; k++) {
      if (backyard[i][k] == '^^') {
        cats++;
      }
    }
  }
  return cats;
}
