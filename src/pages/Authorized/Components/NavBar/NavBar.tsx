import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { homeRoute, loginRoute } from '../../../../values/routes';
import styles from './navBar.module.css';
import { logoText, logOutText, signInText } from './navBar.settings';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../store/reducers/authSlice';
import { useAppSelector } from '../../../../hooks/redux';

const NavBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useAppSelector((store) => store.auth.token);

  const authorized = token !== null;

  const handleNavigateToLogin = () => {
    dispatch(logout({}));
    navigate(loginRoute);
  };

  const handleNavigateToHome = () => {
    navigate(homeRoute);
  };

  return (
    <div className={styles.container}>
      <span className={styles.logoText} onClick={handleNavigateToHome}>
        {logoText}
      </span>
      <span className={styles.button} onClick={handleNavigateToLogin}>
        {authorized ? logOutText : signInText}
      </span>
    </div>
  );
};

export default NavBar;
