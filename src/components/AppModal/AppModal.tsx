import React, { FC } from 'react';
import ReactModal from 'react-modal';
import styles from './appModal.module.css';

interface Props {
  isOpen: boolean;
  children: JSX.Element;
}

const AppModal: FC<Props> = ({ isOpen, children }) => {
  return (
    <ReactModal isOpen={isOpen} className={styles.content} ariaHideApp={false}>
      {children}
    </ReactModal>
  );
};

export default AppModal;
