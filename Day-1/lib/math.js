const lodash= require("lodash");
const sum=require("lodash/sum");
const subtract=require("lodash/subtract");
const multiply=require("lodash/multiply");
const divide=require("lodash/divide");
 
const a=4;
const b=2;

let addition= sum([a,b]);
let subtraction= subtract(a,b)
let multiplication=multiply(a,b)
let division=divide(a,b)
 

console.log(addition);
console.log(subtraction)
console.log(multiplication)
console.log(division)

module.exports ={sum,subtract,multiply,divide}
