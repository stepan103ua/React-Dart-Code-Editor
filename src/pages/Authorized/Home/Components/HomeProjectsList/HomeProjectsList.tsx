import React, { FC } from 'react';
import { Project } from '../../../../../models/project';
import styles from './homeProjectsList.module.css';
import HomeProjectsListItem from './Components/HomeProjectsListItem/HomeProjectsListItem';

interface Props {
  projects: Project[];
}

const HomeProjectsList: FC<Props> = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((e) => (
        <HomeProjectsListItem key={e.id} project={e} />
      ))}
    </div>
  );
};

export default HomeProjectsList;
