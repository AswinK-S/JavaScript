const prompt = require("prompt-sync")()


let my_string = prompt("Enter : ")


try {
   my_string = my_string.split('').reverse().join('')
   console.log(`Reversed string = ${my_string}`)
} catch (error) {
   console.log(`Error:  ${error.message}`)
}finally{
   console.log(typeof(my_string))
}
