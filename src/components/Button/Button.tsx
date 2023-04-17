/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import classes from './button.module.css';

interface Props {
  text: string;
  inverted?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ text, inverted, onClick, disabled = false }: Props) => {
  const isInverted = inverted ?? false;
  return (
    <button
      className={`${classes.container} ${isInverted && classes.inverted}`}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
