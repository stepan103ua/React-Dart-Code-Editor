import React from 'react';

import styles from './authForm.module.css';

interface Props {
  children: JSX.Element[];
}

const AuthForm = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
};

export default AuthForm;
