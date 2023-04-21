import React, { FC } from 'react';
import CircleAvatar from '../CircleAvatar/CircleAvatar';
import styles from './userTile.module.css';

interface Props {
  email: string;
  username: string;
}

const UserTile: FC<Props> = ({ email, username }) => {
  return (
    <div className={styles.container}>
      <CircleAvatar username={username} />
      <div className={styles.userInfo}>
        <span>{username}</span>
        <span className={styles.secondaryText}>{email}</span>
      </div>
    </div>
  );
};

export default UserTile;
