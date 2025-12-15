import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';
import Banner from '../component/Banner/Banner';

const HomeLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <section>
                    <Banner></Banner>
                </section>
            </main>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;