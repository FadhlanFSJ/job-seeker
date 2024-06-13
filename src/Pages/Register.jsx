import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from "react-icons/ri";
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#87ceeb' }}>
      <form className="w-full max-w-md bg-white shadow-md rounded px-10 pt-10 pb-20 mb-9" onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <FaUser className="absolute left-0 top-0 mt-3 ml-3 text-gray-500" />
          <label className="block text-gray-700 text-sm font-bold mb-2 pl-8" htmlFor="">
            
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-8"
            id="username"
            type="text"
            placeholder=" Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 relative">
        <RiLockPasswordFill className="absolute left-0 top-0 mt-3 ml-3 text-gray-500" />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
            
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="      Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6 relative">
        <RiLockPasswordFill className="absolute left-0 top-0 mt-3 ml-3 text-gray-500" />
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
           
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="      Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
