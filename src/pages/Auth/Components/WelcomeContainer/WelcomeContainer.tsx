import React from 'react';
import styles from './welcomeContainer.styles';

interface Props {
  subtitle: string;
}

const WelcomeContainer = ({ subtitle }: Props) => {
  return (
    <div style={styles.container}>
      <span style={styles.titleText}>Welcome</span>
      <span style={styles.subtitleText}>{subtitle}</span>
    </div>
  );
};

export default WelcomeContainer;
