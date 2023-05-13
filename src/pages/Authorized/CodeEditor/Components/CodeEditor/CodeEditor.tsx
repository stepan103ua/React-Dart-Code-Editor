import React, { FC, useContext, useEffect, useState } from 'react';
import styles from './codeEditor.module.css';
import CodeEditorHeader from './Components/CodeEditorHeader/CodeEditorHeader';
import CodeEditorLineCounter from './Components/CodeEditorLineCounter/CodeEditorLineCounter';
import CodeEditorField from './Components/CodeEditorField/CodeEditorField';
import { RoomContext } from '../../../../../context/RoomContext';

interface Props {
  projectId: string;
}

const CodeEditor: FC<Props> = ({ projectId }) => {
  const [code, setCode] = useState('');

  const socket = useContext(RoomContext);

  const linesCount = code.split('\n').length;

  const handleChangeCode = (value: string) => {
    setCode(value);
    socket?.emit('project-code-update', projectId, value);
  };

  useEffect(() => {
    socket?.on('receive-project-code-updated', (updatedCode: string) => {
      console.log(`RECEIVED CODE: ${updatedCode}`);
      setCode(updatedCode);
    });
  }, []);

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
