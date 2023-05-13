import React, { FC } from 'react';
import styles from './codeEditor.module.css';
import CodeEditorHeader from './Components/CodeEditorHeader/CodeEditorHeader';
import CodeEditorLineCounter from './Components/CodeEditorLineCounter/CodeEditorLineCounter';
import CodeEditorField from './Components/CodeEditorField/CodeEditorField';

interface Props {
  projectName: string;
  code: string;
  onChangeCode: (code: string) => void;
}

const CodeEditor: FC<Props> = ({ code, onChangeCode, projectName }) => {
  const linesCount = code.split('\n').length;

  return (
    <div className={styles.container}>
      <CodeEditorHeader title={projectName} />
      <div className={styles.content}>
        <CodeEditorLineCounter linesCount={linesCount} />
        <CodeEditorField onChangeCode={onChangeCode} linesCount={linesCount} code={code} />
      </div>
    </div>
  );
};

export default CodeEditor;
