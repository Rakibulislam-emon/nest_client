import { useState } from 'react';
import useAxios from '../hooks/useAxios';
import { useNavigate } from 'react-router';
import { handleRegister } from '../utils/Registration';
import useAuth from '../hooks/useAuth';

export default function Registration() {
  const axios = useAxios();
  const {createUser,} = useAuth()
  const [userType] = useState('customer'); // No need to toggle, it's always 'customer'
  const navigate = useNavigate();

  return (
    <div className="p-8 mx-auto max-w-lg lg:max-w-xl">
      <h1 className="border-b pb-4 text-center text-3xl font-semibold lg:text-left">
        <span className="border-b-4 border-green pb-3">Register</span>
      </h1>
      <p className="pt-6 text-center text-gray-600 lg:text-left">
        Create an account to get started with your e-commerce journey!
      </p>

      {/* Registration Form */}
      <div className="py-8">
        <form
          onSubmit={(e) => handleRegister(e, userType, axios, navigate, createUser,)}
          className="space-y-6"
        >
          {/* Common fields */}
          <div className="space-y-1">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username *</label>
            <input
              type="text"
              id="username"
              name="username"
              className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green hover:bg-black hover:text-white text-black font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
          >
            Register as Customer
          </button>
        </form>
      </div>
    </div>
  );
}
