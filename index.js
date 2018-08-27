// Code your solutions in this file
function printBadges(employee) {
  for (let i=0; i<employee.length; i++) {
    console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`)
  }
  return employee;
}

function tailsNeverFails() {
  let tailsResults = 0
  while (Math.random() >= 0.5) {
    tailsResults ++;
  }
  return `You got ${tailsResults} tails in a row!`;
}
