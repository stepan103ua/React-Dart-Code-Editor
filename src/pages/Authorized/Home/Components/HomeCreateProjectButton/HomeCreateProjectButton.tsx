import React, { FC } from 'react';
import styles from './homeCreateProjectButton.module.css';
import { buttonText } from './homeCreateProjectButton.settings';

interface Props {
  onCreateProjectClicked: () => void;
}

const HomeCreateProjectButton: FC<Props> = ({ onCreateProjectClicked }) => {
  return (
    <button className={styles.container} onClick={onCreateProjectClicked}>
      {buttonText}
    </button>
  );
};

export default HomeCreateProjectButton;
