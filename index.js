// declaring and assigning range
/*
let range = function(min, max) {
  let min = 1;
  let max = 2;

  return range;
};
*/
console.log("A NUMBER GUESSING GAME");
console.log('');
/*
let start = 1;
let range = 2;
*/
//generate a number from given range

function randomNumber(start, range, score){

// prompt for user name
  const userName = prompt("Enter your name: ");
  console.log(`Hello ${userName}`);
  console.log('');
  console.log(`Start value: ${start};/nRange Value: ${range}`);

  score = 0;
  start = 1;
  range = 2;
  let getRandom = Math.floor(Math.random() * (range - start + 1)) + start;
//  return getRandom;

  let inputNum = parseInt(prompt(`Guess between ${start} and ${range}`));
  console.log('');

  if (inputNum > range || inputNum < start) {
  console.log("You're out of range"); 
    return inputNum;

  if (inputNum == getRandom) {
  score++
  console.log(`You're correct! /n Your score is ${score}`);
  };
  if (inputNum !== getRandom) {
  console.log(`You're wrong! /n Your score is ${score}`);
   randomNumber();
  };
};