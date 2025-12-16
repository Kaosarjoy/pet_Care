import React from 'react';
import { NavLink } from 'react-router';

const Data = ({ d }) => {
  return (
  <div className="card w-full max-w-xs bg-base-100 shadow-sm hover:shadow-md transition my-3 mx-auto">
  <figure className="h-36 overflow-hidden">
    <img
      src={d.image}
      alt={d.serviceName}
      className="w-full h-full object-cover"
    />
  </figure>

  <div className="card-body p-4">
    <h2 className="card-title text-sm font-semibold">
      {d.serviceName}
    </h2>

    <div className="flex justify-between text-xs text-gray-500">
      <span>⭐ {d.rating}</span>
      <span>${d.price}</span>
    </div>

    <NavLink to='/services'>
        <button className="btn btn-info btn-sm mt-2 w-full">
      View Details
    </button>
    </NavLink>
  </div>
</div>

  );
};

export default Data;
