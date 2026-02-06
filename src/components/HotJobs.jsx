import React, { use } from 'react';
import JobCard from './JobCard';

const HotJobs = ({allJobs}) => {
    const jobs = use(allJobs);
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-3xl font-bold'>Jobs of the day</h2>
            <p className='text-lg'>Search and connect with the right candidates faster.</p>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
           </div>

        </div>
    );
};

export default HotJobs;