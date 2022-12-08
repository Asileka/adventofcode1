const fs = require("fs");
function mismatchedItems(datafile) {
  fs.readFile(datafile, (err, data) => {
    const rucksacksArray = data.toString().split("\n");
    const rucksacksArray2 = rucksacksArray.map(
      (x) => (x = [x.slice(0, x.length / 2), x.slice(x.length / 2)])
    );
    //console.log(rucksacksArray2)
    const mismatchedItems = [];
    for (let y = 0; y < rucksacksArray2[0][0].length; y++) {
      for (let i = 0; i < rucksacksArray2[0][0].length; i++) {
        if (rucksacksArray2[0][0][y] === rucksacksArray2[0][1][i]) {
          mismatchedItems.push(rucksacksArray2[0][0][0]);
        }
      }
    }
    console.log(rucksacksArray2[0][0][0]);
    console.log(mismatchedItems);
  });
}
const rucksackDataFile = "./rucksackdata.txt";
mismatchedItems(rucksackDataFile);
