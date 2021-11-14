import React from 'react'
import "./login.css";
import { useState } from 'react';
import axios from 'axios';
import AddArticle from "../write/AddArticle";
import ReactDOM from 'react-dom';

const Login = () => {
    console.log("sdlkjf");
    const [username,setUsername]=useState("");
    const [pwd,setPwd]=useState("");

    const handleSubmit=async(e)=>{
        console.log(username,pwd,"username pwd");
        const logtest=async()=>{
            const res=await axios.post("/api/user/login",{
                "username":username,
                "password":pwd
            });
            console.log(res.data);
            if (res.data==='found'){

               ReactDOM.render(<AddArticle />,document.getElementById('root'));
                
            }else{
                
            }
        }
        logtest();
        e.preventDefault();

    }


    return (
      <div className="login-form">
    <form onSubmit={handleSubmit} >
    
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="required" onChange={e=>setUsername(e.target.value)} />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required" onChange={e=>setPwd(e.target.value)}  />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
        </div>
               
    </form>
</div>
    )
}

export default Login;
