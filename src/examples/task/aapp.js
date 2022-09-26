let count=0;

let arr=[];

function hii(){ 
    let temp;
    let inn=document.getElementById("in").value;
    let emmm=document.getElementById("em").value;
    console.log("name",inn,"email: ",emmm)
    arr.map((x)=>{
    if(x.email==emmm){
        temp=1
        console.log("mails equal");
        document.getElementById("in").value="";
        document.getElementById("em").value="";
    }})
    if(temp==1){
        alert("already registred")
    }
    else{
        count=count+1;
        student={name:inn,email:emmm,id:count}
        arr.push(student);
        console.log(arr);
        console.log("registered successfully")
        document.getElementById("in").value="";
        document.getElementById("em").value="";

    }
}