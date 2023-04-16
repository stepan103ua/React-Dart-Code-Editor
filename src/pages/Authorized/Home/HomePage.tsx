import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import HomeActionsBlock from './Components/HomeActionsBlock/HomeActionsBlock';
import styles from './homePage.module.css';

const HomePage = () => {
  const handleCreateProject = () => {};
  return (
    <div className={styles.container}>
      <NavBar />
      <HomeActionsBlock onCreateProjectClicked={handleCreateProject} />
    </div>
  );
};

export default HomePage;
