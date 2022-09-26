a=[1,4,5,7,9];
let start=0;
let end=a.length;
function Binary_search(arr,key){
   while(end>=start){
        let mid=Math.floor((start+end)/2)
        console.log(mid)
        if(key==a[mid])
            return 1;
        else if(key>a[mid])
            start=mid+1;
        else 
            end=mid-1;

    }
    return -1
    

}
let result=Binary_search(a,9)
if(result ==1)
    console.log("element found in the list");
else 
    console.log("element not their in the list")