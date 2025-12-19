import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import Data from './Data';
import Banner from '../component/Banner/Banner';
import Doctor from './Doctor';
import Tips from './Tips';
import Loader from '../component/Loader/Loader';

const Home = () => {
   const navigation = useNavigation();
   if(navigation.state==='loading'){
    return Loader();
   }

  const { services, doctors,tips } = useLoaderData();

  if (!services || !doctors) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <Banner />

      <h2 className="text-2xl text-center font-semibold mb-6">
        Popular Winter Care Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map(d => (
          <Data key={d.id} d={d} />
        ))}
      </div>

      <h2 className="text-2xl text-center font-semibold mb-6">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {doctors.map(doc => (
          <Doctor key={doc.id} doc={doc} />
        ))}
      </div>
      <h2 className='text-2xl text-center font-semibold mb-6 mt-10'>
        Winter Care Tips for Pets
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
          tips.map(tip=>(
            <Tips key={tip.id} tip={tip}></Tips>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
