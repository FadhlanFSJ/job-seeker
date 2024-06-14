import React, { useContext, useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await login(formData);
      navigate('/jobs');
      // console.log(formData);
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: '#2B8D93' }}>
    <form className="w-full max-w-md bg-white shadow-md rounded-xl px-10 pt-16 pb-20 mb-9 min-h-[450px]" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-10">Login</h2>
        <div className="mb-4 relative">
          <FaUser className="absolute left-1 top-2 mt-15 ml-3 text-gray-500" />
          <label className="block text-gray-700 text-sm font-bold mb-2 pl-8" htmlFor="username">
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-8"
            id="username"
            type="text"
            placeholder="    Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6 relative">
          <RiLockPasswordFill className="absolute left-1 top-2 mt-15 ml-3 text-gray-500" />
          <label className="block text-gray-700 text-sm font-bold mb-2 pl-8" htmlFor="password">
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pl-8"
            id="password"
            type="password"
            placeholder="   Password"
            name="password"
            value={formData.password}
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

export default Login;
