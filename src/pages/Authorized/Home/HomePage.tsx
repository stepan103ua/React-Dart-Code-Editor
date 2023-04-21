import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import HomeActionsBlock from './Components/HomeActionsBlock/HomeActionsBlock';
import styles from './homePage.module.css';
import { RoomContext } from '../../../context/RoomContext';
import { Project } from '../../../models/project';
import HomeProjectsList from './Components/HomeProjectsList/HomeProjectsList';
import { Invite } from '../../../models/invite';
import CreateProjectDialog from './Components/CreateProjectDialog/CreateProjectDialog';

const HomePage = () => {
  const socket = useContext(RoomContext);
  const [projects, setProjects] = useState<Project[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);

  const [isCreateProjectDialogOpen, setCreateProjectDialogOpen] = useState(false);

  useEffect(() => {
    socket?.emit('receive-projects');
    socket?.emit('receive-invites');

    socket?.on('received-projects', (projects: Project[]) => {
      setProjects(projects);
      console.log('RECEIVED PROJECTS');
      console.log(projects);
    });

    socket?.on('received-invites', (invites: Invite[]) => {
      setInvites(invites);
      console.log('RECEIVED INVITES');
      console.log(invites);
    });

    socket?.on('new-invite', (invite: Invite) => {
      setInvites([...invites, invite]);
      console.log('RECEIVED NEW INVITE');
      console.log(invite);
    });

    socket?.on('invite-accepted', (projects, invites) => {
      setInvites(invites);
      setProjects(projects);
    });
  }, []);

  const handleCreateProject = (projectName: string) => {
    console.log(projectName);
    socket?.emit('create-project', projectName);
    setCreateProjectDialogOpen(false);
  };

  const handleOpenCreateProjectDialog = () => {
    setCreateProjectDialogOpen(true);
  };

  const handleCloseCreateProjectDialog = () => {
    setCreateProjectDialogOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.content}>
          <HomeActionsBlock
            onCreateProjectClicked={handleOpenCreateProjectDialog}
            invites={invites}
          />
          <HomeProjectsList projects={projects} />
        </div>
      </div>
      {isCreateProjectDialogOpen && (
        <CreateProjectDialog
          isOpen={isCreateProjectDialogOpen}
          onCancel={handleCloseCreateProjectDialog}
          onCreate={handleCreateProject}
        />
      )}
    </>
  );
};

export default HomePage;
