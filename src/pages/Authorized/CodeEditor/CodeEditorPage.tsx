import React, { FC, useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { RoomContext } from '../../../context/RoomContext';
import styles from './codeEditor.module.css';
import MembersContainer from './Components/MembersContainer/MembersContainer';
import NavBar from '../Components/NavBar/NavBar';
import InviteMemberDialog from './Components/InviteMemberDialog/InviteMemberDialog';
import { User } from '../../../models/user';
import CodeEditor from './Components/CodeEditor/CodeEditor';

const CodeEditorPage: FC = () => {
  const [showInviteMemberDialog, setInviteMemberDialog] = useState(false);
  const [usersOnline, setUsersOnline] = useState<User[]>([]);
  const { id } = useParams();

  console.log(id);

  const socket = useContext(RoomContext);

  useEffect(() => {
    socket?.emit('open-project', id);

    socket?.on('receive-project-users', () => {});

    socket?.on('project-online-members-updated', (users: User[]) => {
      setUsersOnline(users);
      console.log(users);
    });

    const handleUnload = () => {
      socket?.emit('disconnect-from-project', id);
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  const handleInviteMemberClick = () => {
    setInviteMemberDialog(true);
  };

  const handleCloseInviteMemberDialog = () => {
    setInviteMemberDialog(false);
  };

  const handleInvite = (email: string) => {
    socket?.emit('send-invite', email, id);
    setInviteMemberDialog(false);
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <MembersContainer onInviteMember={handleInviteMemberClick} users={usersOnline} />
        <CodeEditor />
      </div>

      <InviteMemberDialog
        isOpen={showInviteMemberDialog}
        onCancel={handleCloseInviteMemberDialog}
        onInviteMember={handleInvite}
      />
    </div>
  );
};

export default CodeEditorPage;
