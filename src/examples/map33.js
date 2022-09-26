let users=[{first:"ravi",last:"siddamsetti"},
{first:"sai",last:"edupuganti"},
{first:"radha",last:"nalla"}]
//map  let name=arrayname.map((x)=>{})->map -> array
let names=users.map((x)=>{return x.first+" "+x.last})
console.log(names)