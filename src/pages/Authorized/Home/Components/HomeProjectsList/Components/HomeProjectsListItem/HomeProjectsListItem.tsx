import React, { FC } from 'react';
import { Project } from '../../../../../../../models/project';
import styles from './homeProjectsListItem.module.css';
import CircleAvatar from '../../../../../Components/CircleAvatar/CircleAvatar';

export interface HomeProjectsListItemProps {
  project: Project;
  onProjectClick: (id: string) => void;
}

const HomeProjectsListItem: FC<HomeProjectsListItemProps> = ({ project, onProjectClick }) => {
  const formattedDate = new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'numeric',
    year: 'numeric'
  });

  const formattedDateString = formattedDate.format(new Date(project.lastSaved));

  const handleProjectClick = () => {
    onProjectClick(project.id);
  };

  return (
    <div className={styles.container} onClick={handleProjectClick}>
      <div className={styles.content}>
        <span className={styles.titleText}>{project.name}</span>
        <div>
          <span>Members</span>
          <div className={styles.membersList}>
            {project.members.map((e) => (
              <CircleAvatar key={e.id} username={e.username} />
            ))}
          </div>
        </div>
        <div className={styles.timeText}>{`Last edited: ${formattedDateString}`}</div>
      </div>
    </div>
  );
};

export default HomeProjectsListItem;
