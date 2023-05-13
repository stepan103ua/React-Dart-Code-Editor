import React, { ChangeEvent, FC } from 'react';
import styles from './codeEditorField.module.css';
import { dartKeywords } from './codeEditorField.settings';

interface Props {
  linesCount: number;
  code: string;
  onChangeCode: (value: string) => void;
}

const CodeEditorField: FC<Props> = ({ linesCount, code, onChangeCode }) => {
  function highlightSyntax(code: string) {
    // const regex = new RegExp(
    //   `\\b(${dartKeywords.join(
    //     '|'
    //   )})\\b|\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/|\\b\\w+\\([^()]*\\)\\w*\\b`,
    //   'gm'
    // );
    // return code.replace(regex, (match) => {
    //   if (/\/\/|\/\*/.test(match)) {
    //     return `<span class="${styles.comment as string}">${match}</span>`;
    //   } else if (dartKeywords.includes(match)) {
    //     return `<span class="${styles.keyword as string}">${match}</span>`;
    //   } else if (functionRegex.test(match)) {
    //     return `<span class="${styles.keyword as string}">${match}</span>`;
    //   } else {
    //     return match;
    //   }
    // });

    const highlightedCode = code
      .split('\n')
      .map((line) => {
        return line
          .split(' ')
          .map((match) => {
            if (match.includes('(')) {
              const words = match.split('(');
              return `<span class="${styles.function as string}">${words[0]}</span>(${words
                .slice(1)
                .join('')
                .toString()}`;
            }
            if (dartKeywords.includes(match)) {
              return `<span class="${styles.keyword as string}">${match}</span>`;
            } else if (
              /^[a-zA-Z]$/.test(match.charAt(0)) &&
              match.charAt(0) === match.charAt(0).toUpperCase()
            ) {
              return `<span class="${styles.class as string}">${match}</span>`;
            } else {
              return match;
            }
          })
          .join(' ');
      })
      .join('\n');

    return highlightedCode.replaceAll(';', (match) => {
      return `<span class="${styles.baseWord as string}">${match}</span>`;
    });
  }

  const handleCodeChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeCode(event.target.value);
  };

  return (
    <div className={styles.stack}>
      <pre className={styles.content}>
        <code
          className={styles.code}
          dangerouslySetInnerHTML={{ __html: highlightSyntax(code) }}></code>
      </pre>
      <textarea
        rows={linesCount}
        className={styles.container}
        value={code}
        onChange={handleCodeChange}>
        {code}
      </textarea>
    </div>
  );
};

export default CodeEditorField;
