import React from 'react';
import Lottie from "lottie-react";
import registerLottie from "../assets/Register.json";

const Register = () => {
  const handleRegister =(e)=>{
    const form = e.target;
    e.preventDefault();
    const formData = new FormData(form);
    const RegisterData = Object.fromEntries(formData.entries());
    console.log(RegisterData);
    
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{width:700,height:700}} animationData={registerLottie} loop />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Enter your name" />
              <label className="label">Photo</label>
              <input type="text" name='photo' className="input" placeholder="Enter your photoURL" />
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
