import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/user/register', formData);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#2B8D93' }}>
      <form className="w-full max-w-md bg-white shadow-md rounded-xl px-10 pt-16 pb-20 mb-9 min-h-[500px]" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">Register</h2>
        <div className="mb-4 relative">
          <FaUser className="absolute left-0 top-0 mt-3 ml-3 text-gray-500" />
          <label className="block text-gray-700 text-sm font-bold mb-5 pl-8" htmlFor="username"></label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-8"
            id="username"
            type="text"
            placeholder="  Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 relative">
          <RiLockPasswordFill className="absolute left-0 top-0 mt-3 ml-3 text-gray-500" />
          <label className="block text-gray-700 text-sm font-bold mb-7" htmlFor="password"></label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="       Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6 relative">
          <RiLockPasswordFill className="absolute left-0 top-0 mt-3 ml-3 text-gray-500" />
          <label className="block text-gray-700 text-sm font-bold mb-7" htmlFor="confirmPassword"></label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="       Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="text-white font-bold py-2 px-4 mb-10 rounded focus:outline-none focus:shadow-outline"
            style={{ backgroundColor: '#2B8D93' }}
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
