console.log("hello how are you")

let num=10
console.log(num)
let $num_1="aswin"
console.log($num_1)
num=9
console.log(num)

console.log(typeof num) 
 console.log(typeof $num_1)
 let num2=123456789101112131415n
 console.log( num2)

 let value=5>6
 console.log(value)

 let bool=5 < 6
 console.log(value)

 let x
 x='aswin'
 x=x+2
 console.log(x,typeof x)

 let num3=8
 console.log(num3,typeof num3)
num3=num3+""
console.log(num3,typeof num3)
num3=num3-2
console.log(num3,typeof num3)
num3='aswin'
console.log(num3,typeof num3)

num3=num3-2
console.log(num3,typeof num3)
num3=8
num3=num3-"a"
num3=num3-""

console.log(num3,typeof num3)
num3=2+""
num3=8-num3
console.log(num3,typeof num3)

//parseInt

let value1="123ASWIN"
value1=parseInt("123ASWIN")
console.log(value1)

//function

function display(){
    console.log('hello')
}

display()

function sum(a){
    let num=6;
    let num1=8;
    let num2=a;
    let sum=num1+num2+num;

    return sum;
}

console.log(sum(10))

///arrow function

arrowFunction = (c,d,e)=>{
    let f=c+d
    let s=e
    return [f,s]
}

console.log(arrowFunction(2,3,"Aswin"))

//hoisting

displayName();
console.log(z);

var z=2;

function displayName(){
    console.log("Aswin")
}