import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;