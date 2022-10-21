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

/*
// prompt for user name
let userName = prompt("Enter your name: ");
console.log(`Hello ${userName}`);
console.log('');
*/
let score = 0;
let start = 1;
let range = 2;
//generate a number from given range
function randomNumber(start, range) {
  let getRandom = Math.floor(Math.random() * (range - start + 1)) + start;
  return getRandom;
};
randomNumber();

let inputNum = parseInt(prompt(`Guess between ${start} and ${range}`));
  console.log('');

if (inputNum > range || inputNum < start) {
  console.log(`Start value: ${start}; Range Value: ${range}`);
  console.log('Pick between the values')
  let inputNum = parseInt(prompt(`Guess between ${start} and ${range}`));
  };

if (inputNum == getRandom) {
  score++
  console.log(`You're correct! /n Your score is ${score}`);
  };
if (inputNum !== getRandom) {
  console.log(`You're wrong! /n Your score is ${score}`);
   randomNumber();
  };
