import React, { FC } from 'react';
import { Invitation } from '../../../../../../types/invitation';
import UserTile from '../../../../Components/UserTile/UserTile';
import styles from './homeInvitationItem.module.css';

interface Props {
  invitation: Invitation;
}

const HomeInvitationItem: FC<Props> = ({ invitation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.projectName}>{invitation.projectName}</span>
        <span className={styles.secondaryText}>From</span>
        <UserTile email={invitation.fromEmail} username={invitation.fromUsername} />
      </div>
      <div className={styles.actionsContainer}>
        <button className={styles.joinButton}>Join</button>
        <button className={styles.rejectButton}>Reject</button>
      </div>
    </div>
  );
};

export default HomeInvitationItem;
