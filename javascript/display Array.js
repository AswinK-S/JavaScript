const prompt = require("prompt-sync")()
const size = parseInt(prompt("Enter array size: "))


const main = () => {
   const arr = getArray()
   displayArray(arr)
}
const getArray = () => {
   let arr = []
   for(let i=0;i<size;i++){
       arr[i] = prompt(`element ${i+1}: `)
   }
   return arr
}
const displayArray = (arr) => {
   console.log(arr)
}


main()
