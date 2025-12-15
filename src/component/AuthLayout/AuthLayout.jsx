import React from 'react';
import Login from '../../page/Login';
import Navbar from '../Navbar/Navbar';



const AuthLayout = () => {
    return (
       <div>
        <Navbar></Navbar>
         <Login></Login>
      
       </div>
    );
};

export default AuthLayout;