// global scope---------------------------------------------------------------------------------------------------------

// var a=10;
// console.log(b)

// d();

// function d(){

//     function e(){
//       var  b=20;
//         console.log(a);

//     }

//     e();

// }


//let------------------------------------------------------------------------------------------------------------


// let a=10;
// let a=20;
// console.log(a)

//shadowing-------------------------------------------------------------------------------------------------------------

// let a=100;

// {
//     let a=10;
//     console.log(a);
// }
// console.log(a);

//const------------------------------------------

// const a=3.14;
// {
//     const a=10;

//     console.log(a);
// }
// console.log(a);

// illegal shadowing----------------------------------------------------

// let a=8;
// {
//     var a=9;
//     console.log(a);
// }
// console.log(a);


///block scope---------------------------------------------
// {
//     const a=100;
//     console.log(a);

// }
// var a=10;
// console.log(a);


//scope of var--------------------------------------------------------


// {
//     var a=10;
// }
// console.log(a);

//------------local scope--------------------------------

// function myFunction() {
//     var carName = "Volvo";
//   }
//   console.log(carName);

//======================closure========================================================

// function name(){
//     var x = "global";
//     function show(){
//         console.log(x)
//     }
//     show();
// }

// name();


// function a(){

//     var x=10;
//     function b(){
//         console.log(x);
//     }

//     return b;
// }
// var y=a();
// console.log(y);
// y();

//here we get reference error - not defined
// function x(){
//     var y=10;
//     console.log(y);
// }

// console.log(y);


///set time out-----------------------------------------------

// var i=9;
// function s(){
// setTimeout(function f(){
//     console.log(i);
// },0)
// console.log("hello");
// }
// s();
// console.log("hello how are you?");

// for(let i=1; i<=5;i++){
// setTimeout(function s(){
//     console.log(i);
// },i*1000)
// }

//====================setTimeout==================
// for(let i=1; i<=5;i++){
//     setTimeout(function t(){
//         console.log(i);
//     },i*1000)

// }

//-----------------callback------------------------------------------------

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })

//---------------------eventlistner-------------------------------------------

// var btn=document.getElementById('btn')
// var h1=document.getElementById('h1')

// h1.addEventListener('mouseover',function(){
//     h1.style.color="red";
// })

// btn.addEventListener('click',function(){
    // h1.innerHTML="Hope you are doing well"
    // h1.style.display="none"

// })

//-----------------------------arrow function------------------------------

// add=(a,d)=> a+d;

// console.log(add(10,2))

//// type of==========================

//let text ='';  // String written inside quotes
//console.log(typeof text); 

//string method------------------------------------------------------

// let text = "Please visit Microsoft and Microsoft!";
// console.log(text);
//  text = text.replace("Microsoft", "W3Schools");
//  console.log(text);

//replace All===================================================================

let text="I love cats. Cats are very easy to love. Cats are very popular"
text=text.replace("cats","dogs");
text=text.replace("Cats","Dogs");
console.log(text);