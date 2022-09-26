let arr=[1,3,2,9,2,13,7]
let max=arr.reduce((acc,cur)=>
{if(cur>acc)
    {acc=cur}
    return acc},0)
console.log("maximum value is",max)