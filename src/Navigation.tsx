import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/Login/LoginPage';
import RegisterPage from './pages/Auth/Register/RegisterPage';
import HomePage from './pages/Authorized/Home/HomePage';
import { homeRoute, loginRoute, registerRoute } from './values/routes';

const Navigation = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={loginRoute} element={<LoginPage />} />
        <Route path={registerRoute} element={<RegisterPage />} />
      </Routes>
      <Routes>
        <Route path={homeRoute} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
