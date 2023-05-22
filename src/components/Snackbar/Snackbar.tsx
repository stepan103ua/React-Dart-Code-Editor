import React, { FC } from 'react';
import styles from './snackbar.module.css';
import { FaMinusCircle } from 'react-icons/fa';

interface Props {
  text: string;
  onClose: () => void;
  alignment?: 'bottomLeft' | 'bottomRight';
}

const Snackbar: FC<Props> = ({ text, onClose, alignment = 'bottomLeft' }) => {
  const alignmentStyle = alignment === 'bottomLeft' ? styles.bottomLeft : styles.bottomRight;
  return (
    <div className={`${styles.container as string} ${alignmentStyle as string}`}>
      <div className={styles.content}>{text}</div>
      <div className={styles.content}>
        <FaMinusCircle size={24} color="white" onClick={onClose} />
      </div>
    </div>
  );
};

export default Snackbar;
