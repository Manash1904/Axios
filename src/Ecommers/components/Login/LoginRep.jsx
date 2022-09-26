import React,{useState} from 'react'
const LoginRep=()=>{
  const [data,setData]=useState({username:'harika',password:'harika',});
  const {username,password}=data;
  const [isDis,setIsDis]=useState(true);
  const onChange= e=>{
    setData({...data,[e.target.name]:[e.target.value]})
    if(username.length && password.length)
    {setIsDis(false)}
     else{ setIsDis(true)}
    
  }
  const submitHandler=e=>{
    e.preventDefault();
    console.log(data);

  }
  return(
    <center>
    <div >
      <form onSubmit={submitHandler}>
     username <input type="email"  name="username" value={username} 
      onChange={onChange} placeholder="username" /><br/>
      password <input type="password"  name="password" value={password}
      onChange={onChange} placeholder="password" /><br/>
      <input type="submit" name="submit" disabled={isDis} />
            
      </form>
    </div>
    </center> 
  )
}
export default LoginRep;

