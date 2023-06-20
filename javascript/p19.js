const prompt = require("prompt-sync")()


const income = parseInt(prompt("Enter your annual income: "))


if(income <= 250000){
   console.log(`you have no tax `)
}
else if(income <= 500000){
   console.log(`tax = ${(income/100)*5}`)
}
else if(income <= 1000000){
   console.log(`tax = ${(income/100)*20}`)
}
else if(income <= 5000000){
   console.log(`tax = ${(income/100)*30}`)
}

