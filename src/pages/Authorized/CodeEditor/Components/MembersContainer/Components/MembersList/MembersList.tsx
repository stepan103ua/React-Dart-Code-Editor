import React, { FC } from 'react';
import { User } from '../../../../../../../models/user';
import CircleAvatar from '../../../../../Components/CircleAvatar/CircleAvatar';
import styles from './membersList.module.css';

interface Props {
  users: User[];
}

const MembersList: FC<Props> = ({ users }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Online</span>
      {users.map((user) => {
        return (
          <div key={user.id} className={styles.memberContainer}>
            <CircleAvatar username={user.username} />
            <div className={styles.memberInfoContainer}>
              <span className={styles.memberUsername}>{user.username}</span>
              <span className={styles.memberEmail}>{user.email}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MembersList;
