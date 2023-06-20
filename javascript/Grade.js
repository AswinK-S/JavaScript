"user strict"
require("prompt-sync")
const pc = require("prompt-sync")
const prompt=pc()

var mark
mark=prompt('Enter the mark :')
if(Number(mark)>=90)
{
    console.log("A")
}
else if(Number(mark)>=80)
{
    console.log("B")
}
else if(Number(mark)>=70)
{
    console.log("C")
}
else if(Number(mark)>=60)
{
    console.log("D")
}
else if(Number(mark)>=50)
{
    console.log("E")
}
else
{
    console.log("FAILED")
}