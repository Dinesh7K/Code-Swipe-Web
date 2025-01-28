import React, { useState } from "react";
import axios from "axios"
const Login = () => {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin=async()=>{
    try{
      const res=await axios.post("http://localhost:3000/login",
        {
        email,
        password
        },
      {
        withCredentials:true
      })
    
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="flex justify-center my-40">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                value={email}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=>setEmailId(e.target.value)}
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                value={password}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=>setPassword(e.target.value)}
                
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
