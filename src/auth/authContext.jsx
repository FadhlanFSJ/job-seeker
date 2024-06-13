import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import api from '../API/api';

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null
  );
  const [userId, setUserId] = useState(
    localStorage.getItem('userId') ? localStorage.getItem('userId') : null
  );

  const login = async (inputs) => {
    try {
      const res = await api.post('/user/login', inputs);
      console.log(res.data);
      setToken(res.data.token);
      setUserId(res.data.user_id);
      localStorage.setItem('token', JSON.stringify(res.data.token));
      localStorage.setItem('userId', res.data.user_id);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post('/user/logout');
      setToken(null);
      setUserId(null); // Menghapus userId dari localStorage saat logout
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
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
    <AuthContext.Provider value={{ token, userId, login, logout }}> {/* Menyertakan userId */}
      {children}
    </AuthContext.Provider>
  );
};
