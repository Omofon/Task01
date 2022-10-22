
// header
console.log("A NUMBER GUESSING GAME");
console.log('');

// username prompt
var userName = prompt("Enter your name: ");
console.log(`Hello ${userName} 😊`);

// introduction to the game
console.log(`Welcome to my number guessing game ${userName}`)
console.log('You are to guess a number within the range.')
console.log("If you guess right, you will be awarded a point. If not you will not gain no points.");
console.log("LET'S GO!!!");

// declaring and assigning values
console.log('')
let rep = parseInt(prompt("How many stages are you going? ")) + 1;
let min = 1, max = 1, point = 0, stage = 1;

// looping for max
while (max < rep) {

  max++
  let inputNum = parseInt(prompt(`Guess between ${min} and ${max}`));
  console.log('');
  // function rand to generate random number
  const rand = () => {

  //console.log(`Start value= ${min}; Range Value= ${max}`);
    var result = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(result)

    if (inputNum > max || inputNum < min) {
      console.log("You're input is out of range");
      inputNum = parseInt(prompt(`Guess between ${min} and ${max}`));
    };

    if (inputNum == result) {
      point++
      console.log(`You're correct! You have ${point} out of ${rep} points`);
    };
    if (inputNum !== result) {
      console.log(`You're wrong! You have ${point} out of ${rep} points`);
      console.log(`The correct guess is ${result}`);
    };
  };
  rand();
  console.log();

  if (max === rep) {
    console.log('THE END.')
    break;
  };
};



