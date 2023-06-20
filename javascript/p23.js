const prompt = require("prompt-sync")()


const main = () =>{
   var a = getArray()   
   displayArray(a)
}
const getArray = () =>{
   let a = []
   const row = parseInt(prompt("Enter number of rows: "))
   const col = parseInt(prompt("Enter number of colums: "))
   for(let i=0; i<row; i++){
       a[i] = []
       for(let j=0; j<col; j++){
           a[i][j] = prompt(`row ${i+1} col ${j+1}: `)
       }
   }
   return a
}
const displayArray = (a) =>{
   a.forEach((x) => {
       console.log(x)
   })
}


main()



