"user strict"
require('prompt-sync')
const ps=require('prompt-sync')
const prompt=ps()

var mark
mark=prompt("Enter the mark : ")
var result=mark>=50?"passed":"failed"
console.log(result)
