import React, { useState } from 'react';
import styles from './codeEditor.module.css';
import NavBar from '../Components/NavBar/NavBar';
import CodeEditor from './Components/CodeEditor/CodeEditor';

const PublicCodeEditor = () => {
  const [code, setCode] = useState('');

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <CodeEditor code={code} onChangeCode={setCode} projectName="Guest mode" />
      </div>
    </div>
  );
};

export default PublicCodeEditor;
