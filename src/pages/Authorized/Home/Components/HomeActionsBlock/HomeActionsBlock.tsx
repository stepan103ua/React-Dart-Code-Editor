import React, { FC } from 'react';
import HomeCreateProjectButton from '../HomeCreateProjectButton/HomeCreateProjectButton';
import HomeInvitations from '../HomeInvitations/HomeInvitations';
import styles from './homeActionsBlock.module.css';

interface Props {
  onCreateProjectClicked: () => void;
}

const HomeActionsBlock: FC<Props> = ({ onCreateProjectClicked }) => {
  return (
    <div className={styles.container}>
      <HomeCreateProjectButton onCreateProjectClicked={onCreateProjectClicked} />
      <HomeInvitations />
    </div>
  );
};

export default HomeActionsBlock;
