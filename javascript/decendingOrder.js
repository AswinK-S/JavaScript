"user strict"
require('prompt-sync');
const ps=require('prompt-sync');
const prompt=ps();

let limit=Number(prompt("Enter the limit :"))
let array=[];

console.log("enter the elemnts of array1");


for(let i=0; i<limit; i++){
    array[i]=Number(prompt());
}

let temp=array[0];

for(i=0; i<limit; i++){
    for(let j=i+1;j<limit; j++){

    if(array[i]< array[j])
    {
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
 }
}

console.log("Elements of the sorted array:");
let output = "";
for (let i = 0; i < limit; i++) {
  output += array[i] + " ";
}
console.log(output);