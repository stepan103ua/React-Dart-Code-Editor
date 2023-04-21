import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import HomeActionsBlock from './Components/HomeActionsBlock/HomeActionsBlock';
import styles from './homePage.module.css';
import { RoomContext } from '../../../context/RoomContext';
import { Project } from '../../../models/project';
import HomeProjectsList from './Components/HomeProjectsList/HomeProjectsList';
import { Invite } from '../../../models/invite';

const HomePage = () => {
  const socket = useContext(RoomContext);
  const [projects, setProjects] = useState<Project[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);

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

  console.log(projects);

  const handleCreateProject = () => {
    socket?.emit('create-project', 'test');
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <HomeActionsBlock onCreateProjectClicked={handleCreateProject} invites={invites} />
        <HomeProjectsList projects={projects} />
      </div>
    </div>
  );
};

export default HomePage;
