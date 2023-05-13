import React, { FC } from 'react';
import styles from './membersContainer.module.css';
import AddMemberContainer, {
  AddMemberContainerProps
} from './Components/AddMemberContainer/AddMemberContainer';
import { User } from '../../../../../models/user';
import MembersList from './Components/MembersList/MembersList';
import Button from '../../../../../components/Button/Button';

interface Props extends AddMemberContainerProps {
  users: User[];
  onSaveCode: () => void;
}

const MembersContainer: FC<Props> = ({ onInviteMember, users, onSaveCode }) => {
  return (
    <div className={styles.container}>
      <div>
        <AddMemberContainer onInviteMember={onInviteMember} />
        <MembersList users={users} />
      </div>
      <div className={styles.button}>
        <Button text="Save code" onClick={onSaveCode} />
      </div>
    </div>
  );
};

export default MembersContainer;
