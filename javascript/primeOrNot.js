const prompt = require("prompt-sync")()
const num = prompt("Enter a number: ")


const checkPrime = () => {
   if(num <= 1){
       return false
   }
   for(let i=2; i<=Math.floor(num/2); i++){
       if(num % i === 0){
           return false
       }
   }
   return true
}


const isPrime = checkPrime()
isPrime? console.log(`${num} is prime`) : console.log(`${num} is not prime`)
