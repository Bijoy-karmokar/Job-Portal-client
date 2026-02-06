import React from 'react';
import Banner from '../components/Banner';
import HotJobs from '../components/HotJobs';

const allJobs = fetch('http://localhost:3000/jobs')
.then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotJobs allJobs={allJobs}></HotJobs>
        </div>
    );
};

export default Home;