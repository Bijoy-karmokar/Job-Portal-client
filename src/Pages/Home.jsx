import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import HotJobs from '../components/HotJobs';

const allJobs = fetch('http://localhost:3000/jobs')
.then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={"Loading ......"}>
                <HotJobs allJobs={allJobs}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;