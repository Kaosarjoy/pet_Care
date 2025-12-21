import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/Fake.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((d) => (
          <div
            key={d.serviceId}
            className="card bg-base-100 shadow-sm hover:shadow-md transition rounded-lg overflow-hidden"
          >
            <figure className="h-48 overflow-hidden">
              <img
                src={d.image}
                alt={d.serviceName}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="card-body p-4">
              <h2 className="card-title text-lg font-semibold">
                {d.serviceName}
              </h2>

              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>⭐ {d.rating}</span>
                <span>${d.price}</span>
              </div>

              <p className="text-gray-600 text-sm mt-2">
                {d.description.slice(0, 60)}...
              </p>

              <Link to={`/services/${d.serviceId}`}>
                <button className="btn btn-info btn-sm mt-3 w-full">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
