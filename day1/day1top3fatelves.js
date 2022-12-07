const fs = require("fs");
function findFatElf (elvesDataFile) {
 fs.readFile(elvesDataFile, (err, data) => {
        let elvesData = data.toString().split("\n\n");
        const elvesDataNewArray = [];
      for (let i=0; i< elvesData.length; i++){
        const separateElf = elvesData[i].split("\n").map(Number);
        const separateElfTotalCal = separateElf.reduce((sum, a) => sum + a, 0);
    elvesDataNewArray.push(separateElfTotalCal);
      }
    const top3ElvesArray = [];
  for ( let i = 0; i< 3; i++){
  for ( let i = 0; i< elvesDataNewArray.length; i++){
    const largestNumber = Math.max(...elvesDataNewArray);
    if(elvesDataNewArray[i] === largestNumber){
      top3ElvesArray.push(largestNumber);
      elvesDataNewArray.splice(i, 1);
      i= elvesDataNewArray.length;
    }
  }
}
  const top3TotalCals = top3ElvesArray.reduce((sum, a) => sum + a, 0);
  console.log(top3TotalCals);
  return top3TotalCals;
    });
};
const elvenTextDataFile = './elvesdata.txt'
findFatElf(elvenTextDataFile);