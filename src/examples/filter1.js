let arr=[2,5,1,7,4,9,6]
let odd=arr.filter((x)=>(x%2))
console.log(odd);

function even(x)
{
    return x%2==0
}
let evenn=arr.filter(even);
console.log(evenn);