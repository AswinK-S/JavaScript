"user strict"
require ('prompt-sync')
const ps=require('prompt-sync')
const prompt=ps()

var num
var i
var result
num=prompt("Enter the number :")


for(i=1; i<=10; i++)
{
    result=i*Number(num)
    console.log(i,"*",num,"=",result)

}