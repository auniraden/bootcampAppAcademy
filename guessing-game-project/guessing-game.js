const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = Math.floor(Math.random() * 100) + 1; //generates a random number between 1 and 100
let numAttempts;

function checkGuess (num){
    if (num == secretNumber){
        console.log("I can't believe you got it CORRECT!");
        return true;
    } else if (num > secretNumber){
        console.log("Umm, nope. Too high ;p");
        return false;
    } else if (num < secretNumber){
        console.log("Hmm, maybe you should guess higher? HAHA!");
        return false;
    }
}

function randomInRange (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function askRange () {
    numAttempts = 5; // set how many the user can attempt the game
    rl.question('Enter a max number: ', (max) => {
        rl.question('Enter a min number: ', (min) => {
          const parsedMin = Number(min);
          const parsedMax = Number(max);
          console.log(`I'm thinking of a number between ${parsedMin} and ${parsedMax}...`);
          const secretNumber = randomInRange(parsedMin, parsedMax);
          askGuess(secretNumber); // Start the guessing game with the generated secretNumber
        });
      });
}

function askGuess(secretNumber){
    if (numAttempts === 0) {
        console.log("You have no more attempts left. GAME OVER!");
        console.log(`The secret number was ${secretNumber}`);
        rl.close();
        return;
    }
    rl.question('Guess a number: ', (answer) => {
        let convertedAnswer = Number(answer); //convert the user's input to a number
        if (checkGuess(convertedAnswer, secretNumber)){
            rl.close();
        } else {
            numAttempts--;
            askGuess(secretNumber);
        }
    });
}

askRange(); // Start the guessing game by asking for the range
