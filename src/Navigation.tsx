import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/Login/LoginPage';
import RegisterPage from './pages/Auth/Register/RegisterPage';
import HomePage from './pages/Authorized/Home/HomePage';
import { codeEditorRoute, guest, homeRoute, loginRoute, registerRoute } from './values/routes';
import RequireAuth from './components/RequireAuth/RequireAuth';
import CodeEditorPage from './pages/Authorized/CodeEditor/CodeEditorPage';
// import { useAppSelector } from './hooks/redux';
import PublicCodeEditor from './pages/Authorized/CodeEditor/PublicCodeEditor';

const Navigation = (): JSX.Element => {
  // const isAuthorized = useAppSelector((store) => store.auth.token) !== null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={loginRoute} element={<LoginPage />} />
        <Route path={registerRoute} element={<RegisterPage />} />
        <Route path={guest} element={<PublicCodeEditor />} />
        <Route element={<RequireAuth />}>
          <Route path={homeRoute} element={<HomePage />} />
          <Route path={codeEditorRoute} element={<CodeEditorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
