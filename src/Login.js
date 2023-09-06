import React from 'react';
import {json, useNavigate} from 'react-router-dom';

function Login() {
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');
    const navigate= useNavigate();

    const handleLogin= async()=>{
        console.warn(email,password);
        let result=await fetch('http://localhost:3000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.warn(result);
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem('token', JSON.stringify(result.auth));
            navigate('/');
        }
        else{
            alert("please enter correct detail");
        }
    }
  return (
    <div className='loginpage'>
      <h1 className='log'>Login Page</h1>
      <input type='text' placeholder='Enter Email' className='inputBox'
      value={email} onChange={(e)=>setEmail(e.target.value)}/>

      <input type='password' placeholder='Enter Password' className='inputBox'
      value={password} onChange={(e)=>setPassword(e.target.value)}/>
     
      <button type='button' className='appButton'
      onClick={handleLogin} >Login</button>

    </div>
  )
}

export default Login
