import React from 'react';
import Login from '../../page/Login';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';




const AuthLayout = () => {
    return (
       <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
         <Login></Login>
         
      
       </div>
    );
};

export default AuthLayout;