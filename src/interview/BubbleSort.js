let arr=[2,-1,4,60,72,1]
console.log(arr.length)
// for(let i=0;i<arr.length;i++)
// console.log(arr[i])
for(let i=0;i<arr.length-1;i++)
    for (let j=0;j<arr.length-1-i;j++)
    {
        if(arr[j]>arr[j+1])
        {
            let tmp;
            tmp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=tmp;
        }
    }
    console.log("after swapping")
    for(let i=0;i<arr.length;i++)
console.log(arr[i])
