let arr=[]
let count=0
function f1(){
    let temp;
    let i;
    i=document.getElementById("container-name").value;
    let e=document.getElementById("container-email").value;
    arr.map((x)=>{if(e==x.email)
    {
        temp=1
    }})
    if(temp==1 ||i==''||e=="")
    {  alert("student already registered or empty name or email id entered NO UPDATION POSSIBLE ")
        
    }
    else{
        count=count+1;
        student={name:i,email:e,id:count}
        arr.push(student)
        document.getElementById("container-name").value="";
        document.getElementById("container-email").value="";
        console.log(arr)


    }

    
}