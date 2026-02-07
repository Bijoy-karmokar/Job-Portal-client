import React from "react";
import { motion } from "motion/react"
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1">
         <motion.img animate={{y:[0,100,0]}} transition={{duration:5, repeat:Infinity ,delay:1}} src={team1} className="max-w-sm rounded-t-4xl border-b-8 border-s-8 border-blue-700 rounded-lg shadow-2xl" />
         <motion.img animate={{x:[50,100,50]}} transition={{duration:5, repeat:Infinity,delay:1}} src={team2} className="max-w-sm rounded-t-4xl border-b-8 border-s-8 border-blue-700 rounded-lg shadow-2xl" />
       </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            The Easiest Way to Get Your <motion.span animate={{color:["#F54927",'#DB4427','#278ADB','#8D27DB','#DB277B'], transition:{duration:3 , repeat:Infinity}}}>New Job</motion.span>
          </h1>
          <p className="py-6 text-lg">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
