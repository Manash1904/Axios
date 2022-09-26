let arr=[1,2,3,4,5,6]
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i]
}
console.log(sum)

let sum1=arr.reduce((acc,cur)=>{
    console.log("accumulator",acc)
    console.log("current",cur)
    return acc=acc+cur},0)
    console.log("sum from reducer",sum1)
