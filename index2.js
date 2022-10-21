function ranNum(min, max, score) {
  min = 1;
  max = 2;
  var getRandom = Math.floor(Math.random() * (max - min + 1)) + min
  //  console.log(getRandom);
  score = 0;

  console.log(`Min value: ${min}; Max Value: ${max}`);
  let inputNum = parseInt(prompt(`Guess between ${min} and ${max}`));
  console.log('');

  if (inputNum < min || inputNum > max) {
    console.log('Your guess is out of range');
    console.log(`Min value: ${min}; Max Value: ${max}`);
    console.log('Pick between the values')
    let inputNum = parseInt(prompt(`Guess between ${min} and ${max}`))
  };
  if (inputNum == getRandom) {
    score++
    console.log(`You're correct! /n Your score is ${score}`);
  };
  if (inputNum !== getRandom) {
    console.log(`You're wrong! /n Your score is ${score}`);
    console.log(`The answer is ${getRandom}`);
  };

};
