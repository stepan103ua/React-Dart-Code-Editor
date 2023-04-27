import React, { FC } from 'react';
import ReactModal from 'react-modal';
import styles from './appModal.module.css';

export interface AppModalProps {
  isOpen: boolean;
  children?: JSX.Element;
}

const AppModal: FC<AppModalProps> = ({ isOpen, children }) => {
  return (
    <ReactModal isOpen={isOpen} className={styles.content} ariaHideApp={false}>
      {children}
    </ReactModal>
  );
};

export default AppModal;
