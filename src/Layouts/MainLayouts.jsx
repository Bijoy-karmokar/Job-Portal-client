import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayouts;