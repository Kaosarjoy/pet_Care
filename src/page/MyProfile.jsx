import React, { use } from 'react';
import { AuthContext } from '../component/Provider/AuthProvider';
import { NavLink } from 'react-router';

const MyProfile = () => {
    const {user} =use(AuthContext)
    if(!user){{
        return <div>
            <h2 className='text-center m-10 text-2xl text-green-400'>
                 Please <NavLink to='/auth/login' className='text-red-200 underline'>Login </NavLink> 
                   or <NavLink to='/auth/register' className='underline text-black'>Register</NavLink>
                   to view your profile</h2>
        </div> 
    }}
      return (
    <div className="max-w-md mx-auto p-6 bg-base-100 shadow-md rounded-lg text-center">
      <img
        src={user.photoURL || "https://ibb.co.com/Vc6p8gMr"}
        alt={user.displayName || "User"}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h2 className="text-2xl font-bold mt-4">{user.displayName || "No Name"}</h2>
      <p className="text-gray-600 mt-1">{user.email}</p>

      <button className="btn btn-info mt-4 w-full">
        Update Profile
      </button>
    </div>
  );
};

export default MyProfile;