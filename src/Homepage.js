import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
//import SignUp from "./SignUp";


function Homepage() {
    const linkStyle = {
        textDecoration: "none",
      };
      // const navigate=useNavigate();
      // useEffect(()=>{
      //   const auth=localStorage.getItem('user');
      //   if(auth){
      //     navigate('/')
      //   }
      // })
      const auth=localStorage.getItem('user');
      const navigate=useNavigate();
      const logout=()=>{
        localStorage.clear();
        navigate('/signup')
        console.warn("apple");
      }
  return (
    <>
      <div className="mainpage">
        <ul className="nav">
          <li>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>About</Link>
          </li>
        

          {
            auth ?<li><Link onClick={logout} to='/signup' style={linkStyle}>Logout</Link></li>:
            <>
            <li><Link to='/signup' style={linkStyle}>SignUp</Link></li>
            <li><Link to='/login' style={linkStyle}>Login</Link></li>
            </>
          }
          
        </ul>
      </div>
    </>
  );
}

export default Homepage;
