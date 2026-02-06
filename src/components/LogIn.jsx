import Lottie from "lottie-react";
import React from "react";
import LogInLottie from '../assets/Login.json'

const LogIn = () => {
    const handleLogIn=(e)=>{
       e.preventDefault();
       const form = e.target; 
       const formData = new FormData(form);
       const LogInData = Object.fromEntries(formData.entries());
       console.log(LogInData);
       
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={LogInLottie} style={{width:500,height:500}} loop></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
           <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogIn} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
