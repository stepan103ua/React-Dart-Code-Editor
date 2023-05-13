import React, { FC } from 'react';
import styles from './codeEditorLineCounter.module.css';

interface Props {
  linesCount: number;
}

const CodeEditorLineCounter: FC<Props> = ({ linesCount }) => {
  const getLines: () => number[] = () => {
    const arr: number[] = [];

    for (let i = 1; i <= linesCount; i++) {
      arr.push(i);
    }

    return arr;
  };
  return (
    <div className={styles.container}>
      {getLines().map((e) => {
        return (
          <div className={styles.lineNumber} key={e}>
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default CodeEditorLineCounter;
