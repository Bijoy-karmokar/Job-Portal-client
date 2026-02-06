import React from 'react';
import {  Link, useLoaderData } from 'react-router';
import Button from './Button';

const JobDetails = () => {
    const jobs = useLoaderData();
    // const {id} = useParams();
     const {_id,title,location,company_logo,company,description,category,requirements} = jobs;
    
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
        <Link  to={`/jobApply/${_id}`}><Button type={"Apply Now"}></Button></Link>
      </div>
        </div>
    );
};

export default JobDetails;