import React, { FC } from 'react';
import styles from './circleAvatar.module.css';

interface Props {
  username: string;
}

const CircleAvatar: FC<Props> = ({ username }) => {
  const shortUsername = username
    .split(' ')
    .map((e) => e.charAt(0))
    .join('');
  return <div className={styles.container}>{shortUsername}</div>;
};

export default CircleAvatar;
