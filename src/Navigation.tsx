import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/Login/LoginPage';
import RegisterPage from './pages/Auth/Register/RegisterPage';
import HomePage from './pages/Authorized/Home/HomePage';
import { codeEditorRoute, homeRoute, loginRoute, registerRoute } from './values/routes';
import RequireAuth from './components/RequireAuth/RequireAuth';
import CodeEditorPage from './pages/Authorized/CodeEditor/CodeEditorPage';

const Navigation = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={loginRoute} element={<LoginPage />} />
        <Route path={registerRoute} element={<RegisterPage />} />
        <Route element={<RequireAuth />}>
          <Route path={homeRoute} element={<HomePage />} />
          <Route path={codeEditorRoute} element={<CodeEditorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
