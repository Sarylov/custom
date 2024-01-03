import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  function redirect(url) {
    navigate(url);
  }

  function back() {
    navigate(-1);
  }

  function checkAuth() {
    const token = getAdminToken;
    setIsAuth(!!token);
    return !!token;
  }

  function getAdminToken() {
    return localStorage.getItem('adminToken');
  }

  function logout() {
    localStorage.removeItem('adminToken');
    setIsAuth(false);
  }

  return { isAuth, redirect, logout, back, checkAuth, getAdminToken };
};
