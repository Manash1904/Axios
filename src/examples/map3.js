let users=[{firstname:"manash",lastname:"enturi",age:35},
{firstname:"ravi",lastname:"siddamsetti",age:25},
{firstname:"radha",lastname:"nalla",age:35}
,
{firstname:"sai",lastname:"epudanti",age:23}]
//manshenturi
//ravi siddamsetti
let output=users.map(x=>{return(x.firstname+" "+x.lastname)})
console.log(output)
