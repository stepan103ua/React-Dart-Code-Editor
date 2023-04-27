import React, { FC } from 'react';
import styles from './membersContainer.module.css';
import AddMemberContainer, {
  AddMemberContainerProps
} from './Components/AddMemberContainer/AddMemberContainer';
import { User } from '../../../../../models/user';
import MembersList from './Components/MembersList/MembersList';

interface Props extends AddMemberContainerProps {
  users: User[];
}

const MembersContainer: FC<Props> = ({ onInviteMember, users }) => {
  return (
    <div className={styles.container}>
      <AddMemberContainer onInviteMember={onInviteMember} />
      <MembersList users={users} />
    </div>
  );
};

export default MembersContainer;
