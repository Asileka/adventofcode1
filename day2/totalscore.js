const fs = require('fs');
function totalScore (dataFile) {
fs.readFile(dataFile, (err, data) =>{
    const gameDataArray = data.toString().split("\n");
    let totalScore = 0;
    for (let i=0; i<gameDataArray.length; i++){
        let mySign = 'rock';
        let opponentSign = 'rock';
        let roundOutcome = 'win';
        switch (gameDataArray[i][0]) {
            case 'B':
              opponentSign = 'paper';
              break;
            case 'C':
              opponentSign = 'scissors';
              break;
          };
          switch (gameDataArray[i][2]) {
            case 'Y':
              mySign = 'paper';
              break;
            case 'Z':
              mySign = 'scissors';
              break;
          };
          if(opponentSign == mySign){
            roundOutcome = 'draw';
            totalScore += 3;
          }
          if(mySign === 'rock' && opponentSign === 'paper'){
            roundOutcome = 'loss';
          }
          if(mySign === 'paper' && opponentSign === 'scissors'){
            roundOutcome = 'loss';
          }
          if(mySign === 'scissors' && opponentSign === 'rock'){
            roundOutcome = 'loss';
          }
          if (roundOutcome === 'win'){
            totalScore += 6;
          }
          if (mySign === 'rock'){
            totalScore += 1;
          }
          if (mySign === 'paper'){
            totalScore += 2;
          }
          if (mySign === 'scissors'){
            totalScore += 3;
          }
   
}
console.log (totalScore)
return totalScore;
})
}
const gameDataFile = './strategydata.txt';
totalScore(gameDataFile);