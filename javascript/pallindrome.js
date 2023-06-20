"user strict"
require('prompt-sync');
const ps=require('prompt-sync');
const prompt=ps();

let string=prompt("Enter the string :")


let length=string.length;
let result;
let flag;

for(let i=0;i<length/2;i++ ){
    flag=0;
    if(string[i]==string[length-i-1]){
        flag=1;
    }
    else{
        break;
    }
}

result=flag==1? "pallindrome" :"Not-pallindrome";
console.log(result);