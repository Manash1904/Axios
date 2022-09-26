let users=[{firstname:"manash",lastname:"enturi",age:35},
{firstname:"ravi",lastname:"siddamsetti",age:25},
{firstname:"radha",lastname:"nalla",age:35},
{firstname:"sai",lastname:"epudanti",age:23}]
//{35:2,25:1,23:1}

let output=users.reduce((acc,cur)=>{
    if(acc[cur.age]){
        acc[cur.age]=acc[cur.age]+1;
    }
    else
    acc[cur.age]=1

return acc
}
,{})
console.log(output)