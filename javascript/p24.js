const prompt = require("prompt-sync")()


class Area{
   circle = (r) => 3.14*(r*r)
   square = (s) => s*s
   rectangle = (l,b) => l*b
   triangle = (h,b) => (h*b)/2
}


class myClass extends Area{
   main = () => {
       console.log("1.circle \n2.square \n3.rectangle \n4.triangle")
       let choice = parseInt(prompt("choice : "))
       switch(choice){
           case 1:
               const radius = parseInt(prompt("Enter radius: "))
               console.log(`Area = ${this.circle(radius)}`)
           case 2:
               const side = parseInt(prompt("Enter the length of one side: "))
               console.log(`Area = ${this.square(side)}`)
           case 3:
               const length = parseInt(prompt("Enter lenght: "))
               const breadth = parseInt(prompt("Enter breadth: "))
               console.log(`Area = ${this.rectangle(length, breadth)}`)
           case 4:
               const height = parseInt(prompt("Enter height: "))
               const base = parseInt(prompt("Enter base: "))
               console.log(`Area = ${this.triangle(height, base)}`)
       }
   }
}


const calculator = new myClass()
calculator.main()
