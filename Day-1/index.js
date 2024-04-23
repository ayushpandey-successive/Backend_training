const {sum,subtract,multiply,divide} =require("./lib/math");



const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (firstNumber) => {
  rl.question("Enter the second number: ", (secondNumber) => {
    const parsedFirst = parseFloat(firstNumber);
    const parsedSecond = parseFloat(secondNumber);
    console.log(sum([parsedFirst, parsedSecond]))
    console.log(subtract(parsedFirst, parsedSecond))
    console.log(multiply(parsedFirst, parsedSecond))
    console.log(divide(parsedFirst, parsedSecond))


    console.log(`You entered ${parsedFirst} and ${parsedSecond}.`);
    rl.close();
  });
});

