// document.getElementById('head').innerHTML='Hello ASWIN - ById';
// document.getElementsByClassName('head')[0].innerHTML='Hello ASWIN - ByClassName';
// document.getElementsByTagName('h2')[0].innerHTML='Hello ASWIN - ByTagName';
// document.getElementById('header').style.color="red";
// document.getElementById('header').style.fontSize="50px";
// document.getElementById('header').style.background="black";
// document.getElementById('img').src="/affirmtn.webp";
// document.getElementById('img').width=500;

// const { reject } = require("promise")

// ==============================================================================

// let btn=document.getElementById('h1').innerHTML



// btn.addEventlistner("click",changeColor);
// function changeColor(){
//     document.getElementById('h1')
//     .style.color="red"
// }

//changing styles through variables

// var data;
// data=document.getElementById('h3');
// data.innerHTML='this is dom manipulation by id using variable';
// data.style.color="blue";
// data.style.backgroundColor="red";

//assigning values to ID through variables

// let value=100;
// document.getElementById('h3').innerHTML=value
// console.log(value);

//relational  operator (not !)

// let a=0 ;
// console.log(!a)


///hoisting

// getName();
// console.log(x);

//  getName=()=>{
//     console.log("hello")

// }

// x=7;





// var x=5;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x)
// }

// function b(){
//     var x=20;
//     console.log(x)
// }


// var a=10;
// function a(){
//     var x=10;
// }
// console.log()


///undefined

// console.log(a)
// var a;
// a=10;
// console.log(a)


///object----------------------------------

// const myObject = {
//     city: "Madrid",
//     greet() {
//       console.log("Greetings from " ,this.city);
//     },
//   };

//   console.log(myObject.city);
//   myObject.greet(); 
  
// let object ={
//     name:"Ahmed",
//     age:20,

// }
//   console.log(object.age);
///-------------------------------------------promise all()

// const {resolve,reject}=require('promise')
// function getName(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('aswin')
//         },2000)
//     })
// }

// function getMobile(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('9207343931')
//         },3000)
//     })
// }

// Promise.all([getName(),getMobile()]).then((result)=>{
//     console.log(result)
// })

// sort--------------------------------------------------------

// const k=[8,14,2,1]
// a = k.sort(function(a,b){
//     return a-b;
// })
// console.log(a)
////sort arrow function--------------------------------------------

// const k = [8, 14, 2, 1];
// const a = k.sort((a, b) => a - b);
// console.log(a);


// reverse-----------------------------------------------------------

// let a=[1,2,4,8,2];

// a.reverse();
// console.log(a)

//------find----------------------------------------------------------------------
 
// let a=[1,2,4,8,2];
// let b=a.find((e)=>
//      e%2===0);
//     console.log(b)

//---------------------------call back------------------

// function add(num1,num2,callback){
//     let err=false;
//     if(num1==0){
//         err=true;
//     }
//     callback(num1+num2,err);
// }

// function multiply(num1,num2,callback){
//     callback(num1*num2);
// }

// function div(num1,num2,callback){
//     callback(num1/num2)
// }


// add(10,30,(sum,err)=>{
//     if(err){
//         console.log('num1 is 0');
//     }
//     else{
//         console.log(sum);
//          multiply(sum,30,(answer)=>{
//             console.log(answer);
//               div(answer,10,(result)=>{
//                 console.log(result);
//                 })
//             }) 
//         }
// })


// ------------------promise----------------------------------

// const Promise= require('promise')

// function add(num1,num2){
//     return new Promise ((resolve,reject)=>{
//         if(num1==0){
//             reject('error')
//         }
//         resolve(num1+num2);
//     })
// }

// function mult(num1,num2){
//     return new Promise ((resolve,reject)=>{
//         if(num1==0){
//             reject('error')
//         }
//         resolve(num1+num2);
//     })
// }

// function div(num1,num2){
//     return new Promise ((resolve,reject)=>{
//         if(num1==0){
//             reject('error')
//         }
//         resolve(num1+num2);
//     })
// }

// add(20,12).then((sum)=>{
//     console.log(sum);
//     return mult(sum,30);
// }).then((product)=>{
//     console.log(product);
//     return div(product,10);
// }).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })

// -----------------------enter input-----------------------------------------

// var read=require('readline-sync');
// var name=read.question('enter your name: ')
// console.log(name)

// console.log(a)
// var a=9;

// console.log(c);//
// let c=9;

// console.log(b);//reference error
// const b=9;

//array
// let x=["a","c","d"]
// console.log(x[0]);

//----------------------------------------------------------------------object

// let x={
//     name:"aswin",
//     age:20,
//     gender:"male"
// }

// console.log("my name is " + x.name + " and Iam " + x.age + " years old " + x.gender);

//---------------------------------------BigInt

// let x = BigInt("123456789012345678901234567890");
// console.log(x);

///--------------------------------------function without ()

//  a=multiply
//  console.log(a)

// function multiply(g,h){
//     return g*h;
// }

// //----------------------functions used as variables

// function sum(a,b){
// return a*b;
// }

// let s=sum(4,5);
// console.log(s);

// ----------------------------variables as function

// let x= function(d,f){
//     return d*f;
// }

// let w=x(5,6);
// console.log(w);

//----------------------------Function() constructor

// let sum= new Function("a","d", "return a*d");

// console.log(sum(8,7))

//-------------------------self invoking function

// (function (){
//     console.log(4+5)
// })();

// function lo(x) {
//     if (x >= 10) {
//       return x ;
//     }
//     return lo(x + 1); 
//   }
//   console.log( lo(2));

// function outside(x) {
//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }
  
//   const fnInside = outside(4); 
//   console.log(fnInside(5)); 
//   console.log(fnInside(6)); 

//   console.log(outside(3)(5)); 
  

//------------------------------object

// const person={
//     name:'Aswin',    
//     age:24,
//     gender:'Male',

// }
// console.log(person.gender)
  
//----------------------------------properties of object

// const person={
//         name:'Aswin',    
//         age:24,
//         gender:'Male',
    
//     }

//  person.age=23;                         //changing the value
//  person.qualification='plus 2'         //adding new value to object
//  console.log(person.qualification)

    // for(d in person){                  //for  loop in object
        // console.log(person[d])
// }



//-------------------------------------------object method

// const person={
//     name:'Aswin',    
//     age:24,
//     gender:'Male',
//     print: function () {
//         return "my name is "+ this.name + " and I am " + this.age + " years old";
//     }

// }

// console.log(person.print())                             // acessing the object method 
// console.log(Object.keys(person).length)                   //  to know whether the object is empty or not



//----------------------------------------------Object.values()


// const person={
//         name:'Aswin',    
//         age:24,
//         gender:'Male',
    
//     }
//     console.log(Object.values(person)) /// gives the values of object in an array


//---------------------Object stringify

// let object={
//     name:'Aswin',
//     age:24,
//     gender:'Male',
// }
// console.log(JSON.stringify(object))     //converts the object to strindg

//------------------------------------for loop in object

// let object={
//     name:'Aswin',
//     age:24,
//     gender:'Male',
// }

// for(e in object){
//     console.log(object[e])
// }

// -----------------------------promise

// function getName(a){
//     return new Promise((reject,resolve)=>{
//         resolve(a);
//     })
// }




// getName('Aswin').then((name)=>{
//     console.log(name);
// }).catch((err)=>{
//     console.log(err)
// })

// -----------------------------promise

// function getName(a){
//     return new Promise ((resolve,reject)=>{
//         resolve(a)
//     })
// }

// getName('aswin').then((name)=>{
//     console.log(name)
// })


//--------------------------------------------Promise all

// function getName(a){
//     return new Promise((resolve,reject)=>{
//         resolve(a);
//     })
// }

// function getNumber(x){
//     return new Promise((resolve,reject)=>{
//         resolve(x);
//     })
// }

// Promise.all([getName("Aswin"),getNumber(9207343931)]).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

//---------------------------------async await

//  function getName(a){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(a);
//         },3000)
//     })
// }

// function getMobile(v){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(v);
//         },2000)
//     })
// }

// async function getUser(){
//   let r =await getName('ASWIN')
//   console.log(r)

//   let s=await getMobile(9207343931)
//   console.log(s)

//     }
// getUser();

//-----------------------------------------------this

// let a={
//     name:'Aswin',
//     age:24,
//     c:function (){
//         console.log(this.age)
//     }
// }

// let b=a.c();
//  b()                         //this works according to the context where it is  called


//-------------------------------------call

// let a={
//    name:"aswin",
//    age:24,
//    x: function(){
//     console.log(this)
//    }
// }



// let b={
//     name:"akshay",
//     age:20
// }
// a.x()
// a.x.call(b)

//----------------------------------call function with argument

// let object1={
//     d:function(s){
//        console.log(s+ " "+ this.name)
//     }
// }


// let object2={
//     name:'aswin'
// }


//  let k=object1.d;
//  k.call(object2,'hi')

//---------------------------------bind

// let object={
//     name:'aswin',
//     display: function(){
//         console.log('hello ' + this.name)
//     }
// }

// let k=object.display.bind(object)
// k()


//---------------------------bind on two objects

// let object1={
//     name:'aswin',
//     display: function (){
//         console.log('hello '+ this.name)
//     }
// }

// let object2={
//     name:'akshay',

// }

// let k=object1.display.bind(object2)          // binding
// k();

//----------------------------------------------------------apply

// let object1={
//     name:'aswin',
//     display:function (a){
//         console.log(a+" "+this.name )
//     }
// }

// let object2={
//     name:'akshay'
// }

// object1.display.apply(object2,['hello'])

//-----------------------------------apply in Math.min

// let arr=[1,2,3,4,-5]

// let k=Math.min.apply('e',arr)
// console.log(k)


//-----------------------------------apply in Math.max

// let arr1=[1,2,3,4,5]

// let m=Math.max.apply(0,arr)
// console.log(m)


//----------------------------------------class

// class Rectangle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
  
//     getArea() {
//       return this.width * this.height;
//     }
  
//     getPerimeter() {
//       return 2 * (this.width + this.height);
//     }
//   }
  
//   const rectangle = new Rectangle(5, 3);
  
//   console.log(rectangle.getArea()); 
//   console.log(rectangle.getPerimeter()); 
  

//---------------------------------------filter

// let array=[1,2,3,4,5,6]

// let d=array.filter((e)=>e%2==1)

// console.log(d.reduce((a,e)=>a+e))

//------------------------------------reverse a string


// let str='hello'+'jithin'
// console.log(str.length)
// let l=str.length
// let rev = '';

// for(let i = l-1; i>=0; i--){
//     rev=rev+str[i];
// }
// console.log(rev)

// let str1=str.split('')
// console.log(str1)
// console.log(str1.reverse().join(''))

//---------------------------------------empty object

// let d={}
// let r=Object.keys(d).length
// console.log(r)

//----------------------------------------empty string

// let str=""
// console.log(str.length)

//------------------------------------------------create a new empty array 

// let b= new Array (6)

// console.log(b)

//------------------------------------------reduce the size of the given array

// let array=[1,2,3,4,5,7]


//     if(array.length > 3){
//         array.length=3;
//     }

// console.log(array)

//------------------------------------double the elements of array using map

// let array=[1,2,5,4,8]

// console.log(array.map((e)=>e*2))


//-------------------------------------double the elements of array using for loop

// let array =[1,2,3,4,8]

// for(let i=0; i<array.length ; i++){
//     array[i]=array[i]*2;
// }

// console.log(array)

//-----------------------------------------sum using forEach

// let array=[1,2,3,7,8]
// let sum=0;
// array.forEach((e)=> sum=sum+e)
// console.log(sum)

//---------------------------------------delete duplicate elements an array

// let array=[1,2,1,8,8,9,5.6,-8]
// let k=[new Set(array)]
// console.log(k)
// let array1=[...k]
// console.log(array1)


// let array=[1,2,1,4,-8,9.5,5,4]

// console.log(array.filter((value,index,self)=>self.indexOf(value)==index))

//-----------------------------------------------unique elements

// let array=[1,2,3,4,4,3]

// for(let i=0; i<array.length;i++){
//     let flag=0
//     for(let j=0;j<array.length;j++){
//         if (array[i] === array[j] && i!==j){
//             flag=1;
//         }

//     }
//      if(flag==0){
//     console.log(array[i])
//      }
// }

//----------------------------------array of strings elements having length more than 5

// let array=["apple",'banana','elephant','straberry']

//  array=array.filter((valu)=>valu.length>5)

//  console.log(array)


//------------------------------delete elements of string array splice()

// let array=['hello','apple','sum','nose']

// array=array.splice()
// console.log(array)

//------------------------------delete elements of string array splice()

// let array = ['hello', 'apple', 'sum', 'nose', 'yellow', 'orange'];

// array.splice(2, 3); 

// console.log(array);

//--------------------------------delete elemnts and add elements

// let array = ['hello', 'apple', 'sum', 'nose', 'yellow', 'orange'];

// array.splice(2, 3,'hi1',4,5,6,7); 

// console.log(array);


// let array=[1,2,4,8,7,9,5,3,5];

// array.splice(2)
// console.log(array)

//--------------------------------delete first and last elements if array

// let array =['hello','apple','sum','nose','hi']

// array.shift()
// array.pop()

// console.log(array)

//---------------------------------delete random elements in an array

// let array=['hello','apple','sum','nose','hi']

// delete array[2]

// console.log(array)

//------------------------------add element to the starting of array

// let array=['hello','apple','sum','nose','hi']

// array.unshift('who')
// console.log(array)

//------------------------------------display elements of array slice

// let array=['hello','apple','sum','nose','hi']

// array=array.slice(1,4)
// console.log(array)

//-----------------------------------convert array elements to string using toString()

// let array = ['hello', 'apple', 'sum', 'nose', 'yellow', 'orange'];

// array = array.toString();
// console.log(array);


//--------------------------------- convert array using join() here we can use separator(' + ')

// let array = ['hello', 'apple', 'sum', 'nose', 'yellow', 'orange'];

// array=array.join('+')
// console.log(array);

//----------------------------------change an element

// let array=['hello','apple','sum','nose','hi']

// array[1]='no'
// console.log(array)

//--------------------------------------concatenating arrays using(...)

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// let array = ['hello', 'apple', 'sum', 'nose', 'yellow', 'orange'];

// let array1=[...myBoys, ...myGirls , ...array]

// console.log(array1)

//--------------------------------------concatenating arrays using concat()

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// let array = ['hello', 'apple', 'sum', 'nose', 'yellow', 'orange'];


// const myChildren = myGirls.concat(myBoys).concat(array);

// console.log(myChildren)

//----------------------------------------sort a string array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.sort())


//-----------------------------sort a numeric array

// let array=[1,2,5,1,44,7,5,66]

// array.sort((a,b)=>a-b)

// console.log(array)

//-----------------------------------------------array destructuring

// let arr=["hello","ppp"]
// let [a,b]=arr
// console.log(a);

//-------------------------------------------object destructuring

// let obj={
//     name:"aaa",
//     place:"nnn"
// };

// let {name,place}=obj;
// console.log(name);

//-----------------------------------------------Strings .length

// let str="";

// console.log(str.length)


//--------------------------------------String objects

// Do not create Strings objects.

// The new keyword complicates the code and slows down execution speed.

// String objects can produce unexpected results:

// let x= new String("hello")
// let y= 'hello'
// console.log(y)
// console.log(x)

//--------------------------------------subString()

// let a='hello'
// a=a.substring(2)
// console.log(a);

//----------------------------------sum using map()

// let ar=[2,3,5,8,0]
// let k=ar.map((e)=>e)
// console.log(k)

// console.log(k.reduce((e,d)=>e+d));

//------------------------------------sum using forEach()

// let array=[1,2,3,4]
// let sum=0;
// array.forEach((e)=>sum=sum+e)
// console.log(sum)

//----------------------------------square()

// let array=[1,2,3,5,7]

// let sq=array.map((e)=>e*e)
// console.log(sq);

//-----------------------------------power of array

// let array=[2,8,9,-8,6]

// let pow=array.map((d)=>Math.pow(d,5))

// console.log(pow);

//----------------------------------cubicroot

// let array=[100,255,888,777,451]

// let cbrt=array.map((e)=>Math.cbrt(e))

// console.log(cbrt)

//----------------------ceil()

// let a=.2;

// let k=Math.ceil(a);
// console.log(k);

//-------------------------------change the values of object using function

// let obj={
//     name:"aaa",
//     age:25,

//     d: function(x){
//        this.name=x;
//     }

// }

// obj.d("sss");


// console.log(obj)

//------------------------------recursion

function f(n){
    if(n<=1)
    return;
    f(n-1)
    console.log(n);
    
    f(n-1);

}

f(4);
