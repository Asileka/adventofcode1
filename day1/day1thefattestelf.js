const fs = require("fs");
function findFatElf (elvesDataFile) {
 fs.readFile(elvesDataFile, (err, data) => {
        let elvesData = data.toString().split("\n\n");
        const elvesDataNewArray = [];
      for (let i=0; i< elvesData.length; i++){
        const separateElf = elvesData[i].split("\n").map(Number);
        const separateElfTotalCal = separateElf.reduce((sum, a) => sum + a, 0)
    elvesDataNewArray.push(separateElfTotalCal);
      }
      const fattestElf = Math.max(...elvesDataNewArray);
       console.log(fattestElf);
       return fattestElf;
    });
};
const elvenTextDataFile = './elvesdata.txt';
findFatElf(elvenTextDataFile);