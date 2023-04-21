import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import RoomProvider from '../../context/RoomContext';
import { useDispatch } from 'react-redux';
import { loadAccessToken } from '../../store/reducers/authSlice';

const RequireAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAccessToken({}));
  }, []);
  const token = localStorage.getItem('accessToken');
  const location = useLocation();

  return token !== null ? (
    <RoomProvider>
      <Outlet />
    </RoomProvider>
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
