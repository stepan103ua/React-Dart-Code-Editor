import React, { FC } from 'react';
import styles from './snackbar.module.css';
import { FaMinusCircle } from 'react-icons/fa';

interface Props {
  text: string;
  onClose: () => void;
}

const Snackbar: FC<Props> = ({ text, onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{text}</div>
      <div className={styles.content}>
        <FaMinusCircle size={24} color="white" onClick={onClose} />
      </div>
    </div>
  );
};

export default Snackbar;
