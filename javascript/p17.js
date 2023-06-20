const prompt = require("prompt-sync")()
var run = true


const inputNumbers = () => [parseInt(prompt("Enter a number: ")), parseInt(prompt("Enter a number: "))]
const addition = (a,b) => a + b
const substraction = (a,b) => a - b
const multiplication = (a,b) => a * b
const division = (a,b) => a / b


while(run){
   console.clear()
   console.log("-----Calculator-----")
   console.log("1. Addition")
   console.log("2. Substraction")
   console.log("3. Multiplication")
   console.log("4. Division")
   console.log("5. Exit")
   let option = parseInt(prompt("Choose an operation: "))
   option > 4 || option < 1? run = true : run = false


   let a;
   switch(option){
       case 1:
           a = inputNumbers()
           console.log("result = "+addition(a[0],a[1]))
           break
       case 2:
           a = inputNumbers()
           console.log("result = "+substraction(a[0],a[1]))
           break
       case 3:
           a = inputNumbers()
           console.log("result = "+multiplication(a[0],a[1]))
           break
       case 4:
           a = inputNumbers()
           console.log("result = "+division(a[0],a[1]))
           break
       case 5:
           run = false
           break
       default:
           console.log("Error Invalid input")
   }
}
