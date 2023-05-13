import React, { useState } from 'react';
import styles from './codeEditor.module.css';
import CodeEditorHeader from './Components/CodeEditorHeader/CodeEditorHeader';
import CodeEditorLineCounter from './Components/CodeEditorLineCounter/CodeEditorLineCounter';
import CodeEditorField from './Components/CodeEditorField/CodeEditorField';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const linesCount = code.split('\n').length;

  const handleChangeCode = (value: string) => {
    setCode(value);
  };

  return (
    <div className={styles.container}>
      <CodeEditorHeader title="Hello World!" />
      <div className={styles.content}>
        <CodeEditorLineCounter linesCount={linesCount} />
        <CodeEditorField onChangeCode={handleChangeCode} linesCount={linesCount} code={code} />
      </div>
    </div>
  );
};

export default CodeEditor;
