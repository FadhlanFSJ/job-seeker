import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('token')) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/user/login", inputs);
    setToken(res.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:8800/api/user/logout");
    setToken(null);
  };

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};