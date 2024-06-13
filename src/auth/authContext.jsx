import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post('http://localhost:8800/api/user/login', inputs);
      setToken(res.data.token);
      localStorage.setItem('token', JSON.stringify(res.data.token));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:8800/api/user/logout');
      setToken(null);
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
