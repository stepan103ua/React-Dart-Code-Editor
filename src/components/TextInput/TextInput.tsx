import React from 'react';
import classes from './textInputStyles.module.css';

interface Props {
  hint: string;
  onChange: (value: string) => void;
  errorText?: string | null;
}

const TextInput = ({ hint, onChange, errorText }: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={classes.container}>
      <span className={classes.labelText}>{hint}</span>
      <input className={classes.inputContainer} placeholder={hint} onChange={handleOnChange} />
      {errorText != null && <span className={classes.errorLabel}>{errorText}</span>}
    </div>
  );
};

export default TextInput;
