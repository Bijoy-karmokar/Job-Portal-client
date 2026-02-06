import React from "react";
import Button from "./Button";
import { Link } from "react-router";

const JobCard = ({ job }) => {
//   console.log(job);
const {_id,title,location,category,description,requirements,company,company_logo} = job;

  return (
    <div>
      <div className="card bg-base-100 shadow-lg h-full flex flex-col p-6">
        <div className="flex items-center gap-2">
            <figure>
          <img
            src={company_logo}
            className="w-16"
            alt="Shoes"
          />
        </figure>
        <div>
           <p className="text-3xl font-semibold">{title}</p>
           <p className="text-2xl font-medium">{location}</p>
        </div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-3xl">
            {company}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            {description}
          </p>
          <div className="card-actions">
            {
             requirements.map((requir,index)=><div key={index} className="badge badge-outline">{requir}</div>)
            }
          </div>
        </div>
        <Link to={`/jobs/${_id}`}><Button className="w-full" type={"Details Page"}></Button></Link>
      </div>
    </div>
  );
};

export default JobCard;
