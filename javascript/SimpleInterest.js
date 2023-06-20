"use strict"
require("prompt-sync")
const ps=require('prompt-sync')
const prompt=ps()

var p=prompt("Enter the principal amount :")
var r=prompt("Enter the interest rate :")
var n=prompt("Enter the number of years:")
var si=Number(p)*Number(r)*Number(n)/100

console.log('SI =',si)











