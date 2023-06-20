const prompt = require("prompt-sync")()


let row = parseInt(prompt("Enter number of rows: "))
let col = parseInt(prompt("Enter number of columns: "))


var arr1 = []
for(let i=0;i<row;i++){
   arr1[i] = []
   for(let j=0;j<col; j++){
       arr1[i][j] = parseInt(prompt(`array 1 row ${i+1} column ${j+1}: `))
   }
}
var arr2 = []
for(let i=0;i<row;i++){
   arr2[i] = []
   for(let j=0;j<col; j++){
       arr2[i][j] = parseInt(prompt(`array 2 row ${i+1} column ${j+1}: `))
   }
}


for(let i=0;i<row;i++){
   for(let j=0;j<col; j++){
       arr1[i][j] += arr2[i][j]
   }
}
console.log("sum = ",arr1)
