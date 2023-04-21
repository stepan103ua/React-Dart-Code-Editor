import React, { FC } from 'react';
import HomeInvitationItem from './HomeInvitationItem/HomeInvitationItem';
import styles from './homeInvitations.module.css';
import { Invite } from '../../../../../models/invite';

interface Props {
  invites: Invite[];
}

const HomeInvitations: FC<Props> = ({ invites }) => {
  return (
    <div className={styles.container}>
      {invites.length !== 0 && <span className={styles.title}>Invitation to projects</span>}
      <div className={styles.invitationsContainer}>
        {invites.map((e) => {
          return <HomeInvitationItem key={e.id} invite={e} />;
        })}
      </div>
    </div>
  );
};

export default HomeInvitations;
