const prompt = require("prompt-sync")()


const size = parseInt(prompt("Enter the array size: "))
let a = [];
for(let i=0;i<size;i++){
   a[i] = parseInt(prompt(`Element ${i+1}: `))
}


let b = []
for(let i=0;i<size-1;i++){
   b[i] = a[i]*a[i+1]
}


console.log(b)

