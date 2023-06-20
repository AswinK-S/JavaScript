"user strict"
require ("prompt-sync")
const ps=require ("prompt-sync")
const prompt=ps()

let limit;
let result=0;

limit=prompt("Enter the limit :")
for ( i=1;i<= Number(limit);i++)
{
    if(i%2==1)
    {
        result=result+i;

    }
 
}

console.log(result);
