const fs = require('fs');
function newTotalScore (dataFile) {
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
            case 'X':
              roundOutcome = 'loss';
              break;
            case 'Y':
              roundOutcome = 'draw';
              break;
          };
        if(opponentSign === 'rock' && roundOutcome === 'win'){
            totalScore += 8;
        }
        if(opponentSign === 'rock' && roundOutcome === 'loss'){
            totalScore += 3;
        }
        if(opponentSign === 'rock' && roundOutcome === 'draw'){
            totalScore += 4;
        }
        if(opponentSign === 'paper' && roundOutcome === 'win'){
            totalScore += 9;
        }
        if(opponentSign === 'paper' && roundOutcome === 'loss'){
            totalScore += 1;
        }
        if(opponentSign === 'paper' && roundOutcome === 'draw'){
            totalScore += 5;
        }
        if(opponentSign === 'scissors' && roundOutcome === 'win'){
            totalScore += 7;
        }
        if(opponentSign === 'scissors' && roundOutcome === 'loss'){
            totalScore += 2;
        }
        if(opponentSign === 'scissors' && roundOutcome === 'draw'){
            totalScore += 6;
        }
   
}
console.log (totalScore)
return totalScore;
})
}
const gameDataFile = './strategydata.txt';
newTotalScore(gameDataFile);