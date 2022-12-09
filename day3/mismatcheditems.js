const fs = require("fs");
function mismatchedItems(datafile) {
  fs.readFile(datafile, (err, data) => {
    const rucksacksArray = data.toString().split("\n");
    const rucksacksArray2 = rucksacksArray.map(
      (x) => (x = [x.slice(0, x.length / 2), x.slice(x.length / 2)])
    );
    const mismatchedItems = [];
    rucksacksArray2.map((y) => {
      for (let i = 0; i < y[1].length; i++) {
        if (y[1].includes(y[0][i])) {
          mismatchedItems.push(y[0][i]);
          i = y[1].length + 1;
        }
      }
    });
    // const alphabetLower = "abcdefghijklmnopqrstuvwxyz".split("");
    // const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    // const numbersArray1 = Array.from(Array(26).keys(), (x) => x + 1);
    // const numbersArray2 = Array.from(Array(26).keys(), (x) => x + 27);
    const alphabet =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const numbersArray = Array.from(Array(52).keys(), (x) => x + 1);
    let num = 1;
    const lookupTable = alphabet.reduce((accumulator, value) => {
      return {
        ...accumulator,
        [value]: num++,
      };
    }, {});
    const convertedItems = mismatchedItems.map((key) => lookupTable[key]);
    // console.log(convertedItems);
    const sumOfPriorities = convertedItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(sumOfPriorities);
  });
}
const rucksackDataFile = "./rucksackdata.txt";
mismatchedItems(rucksackDataFile);
