import React from "react";
import { NavLink } from "react-router";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log({ name, email, photo, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded-lg"
            required
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full border p-2 rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-2 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
          >
            Register
          </button>
          <p>Already have an account {''} <NavLink to='/auth/login' className='text-blue-500'>Login</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
