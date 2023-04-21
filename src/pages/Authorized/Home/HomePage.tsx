import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import HomeActionsBlock from './Components/HomeActionsBlock/HomeActionsBlock';
import styles from './homePage.module.css';
import { RoomContext } from '../../../context/RoomContext';
import { Project } from '../../../models/project';
import HomeProjectsList from './Components/HomeProjectsList/HomeProjectsList';

const HomePage = () => {
  const socket = useContext(RoomContext);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    socket?.emit('receive-projects');

    socket?.on('received-projects', (projects: Project[]) => {
      setProjects(projects);
      console.log('RECEIVED PROJECTS');
      console.log(projects);
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
        <HomeActionsBlock onCreateProjectClicked={handleCreateProject} />
        <HomeProjectsList projects={projects} />
      </div>
    </div>
  );
};

export default HomePage;
