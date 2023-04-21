import React, { FC } from 'react';
import HomeCreateProjectButton from '../HomeCreateProjectButton/HomeCreateProjectButton';
import HomeInvitations from '../HomeInvitations/HomeInvitations';
import styles from './homeActionsBlock.module.css';
import { Invite } from '../../../../../models/invite';

interface Props {
  onCreateProjectClicked: () => void;
  invites: Invite[];
}

const HomeActionsBlock: FC<Props> = ({ onCreateProjectClicked, invites }) => {
  return (
    <div className={styles.container}>
      <HomeCreateProjectButton onCreateProjectClicked={onCreateProjectClicked} />
      <HomeInvitations invites={invites} />
    </div>
  );
};

export default HomeActionsBlock;
