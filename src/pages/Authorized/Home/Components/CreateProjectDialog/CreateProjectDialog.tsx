import React, { FC, useState } from 'react';
import AppModal from '../../../../../components/AppModal/AppModal';
import styles from './createProjectDialog.module.css';
import TextInput from '../../../../../components/TextInput/TextInput';
import Button from '../../../../../components/Button/Button';
import { validateField } from '../../../../../values/validation';

interface Props {
  isOpen: boolean;
  onCreate: (projectName: string) => void;
  onCancel: () => void;
}

const CreateProjectDialog: FC<Props> = ({ isOpen, onCancel, onCreate }) => {
  const [projectName, setProjectName] = useState('');
  const [projectNameError, setProjectNameError] = useState<string | null>(null);

  const handleChangeProjectName = (value: string) => {
    setProjectName(value);
  };

  const handleCreate = () => {
    const error = validateField(projectName);

    if (error !== null) {
      setProjectNameError(error);
      return;
    }

    onCreate(projectName);
  };

  return (
    <AppModal isOpen={isOpen}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h1>Create a project</h1>
          <span className={styles.descriptionText}>To create a project enter project name</span>
        </div>
        <TextInput
          hint="Project name"
          onChange={handleChangeProjectName}
          errorText={projectNameError}
        />
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <Button text="Cancel" onClick={onCancel} inverted />
          </div>
          <div className={styles.buttonContainer}>
            <Button text="Create" onClick={handleCreate} />
          </div>
        </div>
      </div>
    </AppModal>
  );
};

export default CreateProjectDialog;
