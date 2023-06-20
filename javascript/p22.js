const prompt = require("prompt-sync")()




var rows = parseInt(prompt("Enter number of rows: "))
var cols = parseInt(prompt("Enter number of columns: "))
var a = [], b = [], c = []


const getArray = () => {
   for(let i=0;i<rows; i++){
       a[i] = []
       for(let j=0;j<cols; j++){
           a[i][j] = parseInt(prompt(`array 1 row ${i+1} column ${j+1}: `))
       }
   }


   for(let i=0;i<rows; i++){
       b[i] = []
       for(let j=0;j<cols; j++){
           b[i][j] = parseInt(prompt(`array 2 row ${i+1} column ${j+1}: `))
       }
   }
}
const addArray = () => {
   for(let i=0;i<rows;i++){
       c[i] = []
       for(let j=0;j<cols;j++){
           c[i][j] = a[i][j] + b[i][j]
       }
   }


}
const displayArray = () => {
   console.log(c)
}


getArray()
addArray()
displayArray()
