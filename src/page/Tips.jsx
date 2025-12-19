import React from 'react';

const Tips = ({tip}) => {
    return (
         <div className="card w-full max-w-sm bg-base-100 shadow-sm hover:shadow-md transition my-3 mx-auto">
      <figure className="h-48 overflow-hidden">
        <img
          src={tip.image}
          alt={tip.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="text-lg font-semibold mb-2">{tip.title}</h2>
        <p className="text-sm text-gray-600">{tip.description}</p>
      </div>
    </div>
    );
};

export default Tips;