"use strict"
require("prompt-sync")
const ps=require("prompt-sync")
const prompt=ps()

let num1=prompt("Enter the first number :")
let num2=prompt("Enter the second number :")
let sum=Number(num1)+Number(num2)
console.log(sum)