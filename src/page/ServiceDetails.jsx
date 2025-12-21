import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/Fake.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((s) => s.serviceId === parseInt(id));
        setService(found);
      })
     
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  if (!service) return <p className="text-center mt-10">Service Not Found</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-96 object-cover rounded-lg"
      />

      <h1 className="text-2xl font-bold mt-4">{service.serviceName}</h1>
      <p className="text-gray-600 mt-2">{service.description}</p>

      <div className="mt-4 space-y-1 text-sm">
        <p>⭐ Rating: {service.rating}</p>
        <p>💰 Price: ${service.price}</p>
        <p>📂 Category: {service.category}</p>
        <p>👤 Provider: {service.providerName}</p>
        <p>📧 Email: {service.providerEmail}</p>
        <p>🪑 Slots: {service.slotsAvailable}</p>
      </div>

      <div className="mt-8 card bg-base-100 shadow-md p-4">
        <h2 className="text-lg font-semibold mb-3">Book Service</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <button className="btn btn-info w-full">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
