import React, { FC } from 'react';
import styles from './addMemberContainer.module.css';
import { FaPlus } from 'react-icons/fa';

export interface AddMemberContainerProps {
  onInviteMember: () => void;
}

const AddMemberContainer: FC<AddMemberContainerProps> = ({ onInviteMember }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Members</span>
      <FaPlus className={styles.button} color="white" onClick={onInviteMember} />
    </div>
  );
};

export default AddMemberContainer;
