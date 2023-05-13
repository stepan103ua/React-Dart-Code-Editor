import React, { FC } from 'react';
import styles from './codeEditorHeader.module.css';

interface Props {
  title: string;
}

const CodeEditorHeader: FC<Props> = ({ title }) => {
  return <div className={styles.container}>{title}</div>;
};

export default CodeEditorHeader;
