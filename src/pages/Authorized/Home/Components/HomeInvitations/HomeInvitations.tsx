import React from 'react';
import { Invitation } from '../../../../../types/invitation';
import HomeInvitationItem from './HomeInvitationItem/HomeInvitationItem';
import styles from './homeInvitations.module.css';

const dummyInvitations: Invitation[] = [
  {
    id: '1',
    projectName: 'Hello world!',
    fromEmail: 'stepan8877ua@gmail.com',
    fromUsername: 'Stepan Dobrianskyi'
  },
  {
    id: '2',
    projectName: 'Hello world!',
    fromEmail: 'stepan8877ua@gmail.com',
    fromUsername: 'Stepan'
  }
];

const HomeInvitations = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Invitation to projects</span>
      <div className={styles.invitationsContainer}>
        {dummyInvitations.map((e) => {
          return <HomeInvitationItem key={e.id} invitation={e} />;
        })}
      </div>
    </div>
  );
};

export default HomeInvitations;
