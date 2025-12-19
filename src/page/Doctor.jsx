import React from 'react';
import { NavLink } from 'react-router';

const Doctor = ({ doc }) => {
  return (
  <div className="card w-full max-w-xs bg-base-100 shadow-sm hover:shadow-md transition my-3 mx-auto">

      <figure className="h-36 overflow-hidden">
        <img
          src={doc.image}
          alt={doc.name}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="text-sm font-semibold">
          {doc.name}
        </h2>

        <p className="text-xs text-gray-500">
          {doc.specialty}
        </p>

        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>⭐ {doc.rating}</span>
          <span>${doc.price}</span>
        </div>

        <p className="text-xs text-gray-400 mt-1">
          {doc.experience}
        </p>
      </div>

    </div>

  );
};

export default Doctor;
