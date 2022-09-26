import React ,{useState}from 'react'
import axios from 'axios';

const SignUpForm = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    )
    const {username,email,password,confirmPassword}=data;
    const changeHandler=(e)=>
    {
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const sumbitHandler=e=>
    {
        e.preventDefault();
        axios.post('https://skillhub-9fc13-default-rtdb.firebaseio.com/register.json',data).then(()=>alert("submitted sucessfully"))
       // console.log(data);
    }
  return (
    <div>
      SignUp form

      <form onSubmit={sumbitHandler}>
          <input type="text" name="username" value={username} onChange={changeHandler}placeholder="enter name"/><br/>
          <input type="email" name="email" value={email} onChange={changeHandler} placeholder="enter EMAIL"/><br/>
          <input type="password" name="password" value={password} onChange={changeHandler}placeholder="enter PASSWORD"/><br/>
           <input type="password" name='confirmPassword' placeholder="enter PASSWORD AGAIN"
           value={confirmPassword} onChange={changeHandler}/><br/>
            <input type="submit" name="submit" />
      </form>
    </div>
  )
}

export default SignUpForm