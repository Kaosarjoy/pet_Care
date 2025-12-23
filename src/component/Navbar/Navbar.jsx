import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import logoImg from '../../assets/logo.jpg';
import { AuthContext } from '../Provider/AuthProvider';
import UserImg from '../../assets/User.png';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="navbar-start flex items-center gap-2">
        <NavLink to='/' className="flex items-center gap-2">
          <img src={logoImg} className="w-10 h-10 rounded-full" />
          <h4 className="text-xl font-semibold">Pet Care</h4>
        </NavLink>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden ml-auto">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-square btn-ghost"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Center Links */}
      <div className={`flex-1 flex justify-center gap-4 lg:flex ${menuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-base-100 p-4 lg:static lg:flex-row' : 'hidden lg:flex'}`}>
        <NavLink to="/home" className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold mx-2" : "mx-2"
        }>
          Home
        </NavLink>
        <NavLink to="/services" className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold mx-2" : "mx-2"
        }>
          Services
        </NavLink>
        <NavLink to="/myProfile" className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold mx-2" : "mx-2"
        }>
          MyProfile
        </NavLink>
      </div>

      {/* Right */}
      <div className="navbar-end gap-4 flex items-center">
        {user ? (
          <>
            <div className="relative group cursor-pointer">
              <img
                src={user.photoURL || UserImg}
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
              src={UserImg}
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
