const {sum,subtract,multiply,divide} =require("./lib/math");

const fs = require("fs");

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
    const data = `
Opeartion , Result,
add ${sum([parsedFirst, parsedSecond])}
subtract : ${subtract(parsedFirst, parsedSecond)}
multiply : ${multiply(parsedFirst, parsedSecond)}
division : ${divide(parsedFirst, parsedSecond).toFixed(2)}
`;

fs.writeFile("data.csv", data, "utf-8", (err) => {
  if (err) console.log(err);
  else console.log("Data saved");
});


    console.log(`You entered ${parsedFirst} and ${parsedSecond}.`);
    rl.close();
  });
});

