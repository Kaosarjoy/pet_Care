import React, { Suspense } from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer/Footer';
import Loader from '../page/Loader';



const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="mb-8">
                <Navbar />
            </nav>

            {/* Suspense wrap for page content */}
            <Suspense fallback={<Loader />}>
                <main className="flex-1">
                    <Outlet />
                </main>
            </Suspense>

            <Footer />
        </div>
    );
};

export default HomeLayout;