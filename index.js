// Code your solutions in this file

function printBadges(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr
}

function tailsNeverFails() {
  function coinToss() {
    return Math.random() >= .5;
  }
  let i = 0;
  while (coinToss()) {
    i++
  }
  return `You got ${i} tails in a row!`;
}
