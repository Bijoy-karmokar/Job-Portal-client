import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicantList from './ApplicantList';

const applicationPromise = fetch(`http://localhost:3000/applications?email=${email}`).then(res=>res.json());

const MyApplication = () => {
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={"Application Loading........."}>
                <ApplicantList></ApplicantList>
            </Suspense>
        </div>
    );
};

export default MyApplication;