/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import classes from './button.module.css';

interface Props {
  text: string;
  inverted?: boolean;
  onClick: () => void;
}

const Button = ({ text, inverted, onClick }: Props) => {
  const isInverted = inverted ?? false;
  return (
    <button className={`${classes.container} ${isInverted && classes.inverted}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
