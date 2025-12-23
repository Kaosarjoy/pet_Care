import React from 'react';
import Login from '../../page/Login';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';




const AuthLayout = () => {
    return (
       <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
         
      
       </div>
    );
};

export default AuthLayout;