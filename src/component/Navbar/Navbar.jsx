import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import logoImg from '../../assets/logo.jpg';
import { AuthContext } from '../Provider/AuthProvider';
//import UserImg from '../../assets/User.png';
const Navbar = () => {
    const {user ,logOutUser}= use(AuthContext)
    const navigate = useNavigate()
   const handleLogOut = () => {
  logOutUser()
    .then(() => {
      navigate("/auth/login");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left */}
      <div  className="navbar-start  flex  items-center gap-2">
        <NavLink to='/' className="flex items-center gap-2">
          <img src={logoImg} className="w-10 h-10 rounded-full" />
        <h4 className="text-xl font-semibold">Pet Care</h4>
        </NavLink>
      </div>

      {/* Center Links */}
      <div className="flex-1 flex justify-center gap-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold mx-2" : "mx-2"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold mx-2" : "mx-2"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/myProfile"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold mx-2" : "mx-2"
          }
        >
          MyProfile
        </NavLink>
      </div>

      {/* Right */}
      <div className="navbar-end gap-4 flex items-center">
        {user ? (
          <>
            <div className="relative group cursor-pointer">
              <img
                src={user.photoURL || 'https://i.ibb.co.com/k6VhMmqp/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg'}
                className="w-10 h-10 rounded-full border"
              />
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-black text-white text-xs px-3 py-1 rounded">
                {user.displayName || user.email}
              </div>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-outline ml-2"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <img
              src="https://i.ibb.co/2kRZ7sM/user.png"
              className="w-10 h-10 rounded-full border"
            />
            <NavLink
              to="/auth/login"
              className="btn btn-primary btn-sm ml-2"
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
