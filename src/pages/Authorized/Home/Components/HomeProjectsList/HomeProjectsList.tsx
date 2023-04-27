import React, { FC } from 'react';
import { Project } from '../../../../../models/project';
import styles from './homeProjectsList.module.css';
import HomeProjectsListItem from './Components/HomeProjectsListItem/HomeProjectsListItem';

interface Props {
  projects: Project[];
  onProjectClick: (id: string) => void;
}

const HomeProjectsList: FC<Props> = ({ projects, onProjectClick }) => {
  if (projects.length === 0) {
    return <div className={styles.container}>No projects found</div>;
  }
  return (
    <div className={styles.container}>
      {projects.map((e) => (
        <HomeProjectsListItem key={e.id} project={e} onProjectClick={onProjectClick} />
      ))}
    </div>
  );
};

export default HomeProjectsList;
