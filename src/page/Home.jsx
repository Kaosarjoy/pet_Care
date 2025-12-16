import React from 'react';
import { useLoaderData } from 'react-router';
import Data from './Data';

const Home = () => {
  const data = useLoaderData();

  if (!data) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl text-cyan-200">
        Welcome to Home Section
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
        data.map(d => (
          <Data  key={d.id} d={d} />
        ))
      }
      </div>
    </div>
  );
};

export default Home;
