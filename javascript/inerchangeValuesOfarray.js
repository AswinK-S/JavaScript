"user strict"
require('prompt-sync');
const ps=require('prompt-sync');
const prompt=ps();

let limit=Number(prompt("Enter the limit :"))
let array1=[];
let array2=[];
let temp;

console.log("enter the elemnts of array1");


for(let i=0; i<limit; i++){
    array1[i]=Number(prompt());
}

console.log("enter the elemnts of array2");


for(let i=0; i<limit; i++){
    array2[i]=Number(prompt());
}

for(let i=0; i<limit; i++){
    temp=array1[i];
    array1[i]=array2[i];
    array2[i]=temp;
}

console.log(" Elemnts of array1 after swaping");

let test="";

for(i=0; i<limit; i++)
{
    test=test+array1[i]+" ";
}

console.log(test);

console.log(" Elemnts of array2 after swaping");

let test1="";

for(i=0; i<limit; i++)
{
    test1=test1+array2[i]+" ";
}
console.log(test1);
