import React, { FC, useContext } from 'react';
import UserTile from '../../../../Components/UserTile/UserTile';
import styles from './homeInvitationItem.module.css';
import { Invite } from '../../../../../../models/invite';
import { RoomContext } from '../../../../../../context/RoomContext';

interface Props {
  invite: Invite;
}

const HomeInvitationItem: FC<Props> = ({ invite }) => {
  const socket = useContext(RoomContext);

  const handleJoin = () => {
    socket?.emit('invite-respond', true, invite.id);
  };

  const handleReject = () => {
    socket?.emit('invite-respond', false, invite.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.projectName}>{invite.project.name}</span>
        <span className={styles.secondaryText}>From</span>
        <UserTile email={invite.fromUser.email} username={invite.fromUser.username} />
      </div>
      <div className={styles.actionsContainer}>
        <button className={styles.joinButton} onClick={handleJoin}>
          Join
        </button>
        <button className={styles.rejectButton} onClick={handleReject}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default HomeInvitationItem;
