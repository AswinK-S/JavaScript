const prompt = require("prompt-sync")()


let counter = 0
for(let i=1; i<5;i++){
   let row = ''
   for(let j=1;j<=i;j++){
       counter++
       row += counter + ' '
   }
   console.log(row)
}
