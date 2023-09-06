import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name,setName]=useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();

    const collectData=async ()=>{
        console.warn(name,email,password);
        let result=await fetch('http://localhost:3000/signup',{
          method:'POST',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate('/');
    }
  return (
    <>
    <div className='signup'>
        <h1 className='reg'>Register</h1>
        
        <input className="inputBox" type="text" 
        value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
       
        <input className="inputBox" type='text' 
        value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
       
        <input className="inputBox" type='text' 
        value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
        
        <button className="appButton" type='button' onClick={collectData}>Register</button>
    </div>
    </>
  )
}

export default SignUp
