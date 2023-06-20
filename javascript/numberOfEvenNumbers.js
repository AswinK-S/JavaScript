"user strict"
require('prompt-sync');
const ps=require('prompt-sync');
const prompt=ps();

let limit=Number(prompt("Enter the limit :"))
let array1=[];

console.log("enter the elemnts of array1");


for(let i=0; i<limit; i++){
    array1[i]=Number(prompt());
}

let count=0;
for(i=0;i<limit;i++ ){
    if(array1[i]%2==0){
      
        count++;
   }
}

console.log("Number of even numbers in the given array is :",count);