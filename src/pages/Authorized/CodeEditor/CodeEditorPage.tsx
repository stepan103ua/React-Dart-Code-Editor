import React, { FC, useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { RoomContext } from '../../../context/RoomContext';
import styles from './codeEditor.module.css';
import MembersContainer from './Components/MembersContainer/MembersContainer';
import NavBar from '../Components/NavBar/NavBar';
import InviteMemberDialog from './Components/InviteMemberDialog/InviteMemberDialog';
import { User } from '../../../models/user';
import CodeEditor from './Components/CodeEditor/CodeEditor';
import Snackbar from '../../../components/Snackbar/Snackbar';
import { useAppSelector } from '../../../hooks/redux';

const CodeEditorPage: FC = () => {
  const [showInviteMemberDialog, setInviteMemberDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usersOnline, setUsersOnline] = useState<User[]>([]);
  const [codeSavingMessage, setCodeSavingMessage] = useState<string | null>(null);
  const [code, setCode] = useState('');
  const [projectName, setProjectName] = useState('Loading...');
  const { id } = useParams();

  console.log(id);

  console.log(useAppSelector((store) => store.auth.token));

  const socket = useContext(RoomContext);

  useEffect(() => {
    socket?.emit('open-project', id);

    socket?.on('project-no-access', (message) => {
      setError(message);
    });

    socket?.on('project-online-members-updated', (users: User[]) => {
      setUsersOnline(users);
      console.log(users);
    });

    socket?.on('receive-project-code-saved', (message) => {
      setCodeSavingMessage(message);
    });

    socket?.on('receive-project-code-updated', (updatedCode: string) => {
      setCode(updatedCode ?? '');
    });

    socket?.on('receive-project-loaded', (projectName: string | null, updatedCode: string) => {
      setCode(updatedCode ?? '');
      setProjectName(projectName ?? 'Failed to load project name');
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

  const handleCloseCodeSavingSnackbar = () => {
    setCodeSavingMessage(null);
  };

  const handleCodeSaving = () => {
    socket?.emit('project-code-save', id ?? '', code);
  };

  const handleChangeCode = (value: string) => {
    setCode(value);
    socket?.emit('project-code-update', id ?? '', value);
  };

  if (error !== null) {
    return (
      <div className={styles.container}>
        <NavBar />
        <div className={styles.center}>
          <h1>{error}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {codeSavingMessage != null ? (
        <Snackbar
          alignment="bottomRight"
          text={codeSavingMessage}
          onClose={handleCloseCodeSavingSnackbar}
        />
      ) : (
        <></>
      )}
      <NavBar />
      <div className={styles.content}>
        <MembersContainer
          onInviteMember={handleInviteMemberClick}
          users={usersOnline}
          onSaveCode={handleCodeSaving}
        />
        <CodeEditor code={code} onChangeCode={handleChangeCode} projectName={projectName} />
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
