import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Spacer from '../../../components/Spacer/Spacer';
import TextInput from '../../../components/TextInput/TextInput';
import { registerRoute } from '../../../values/routes';
import { validateEmail, validatePassword } from '../../../values/validation';
import AuthForm from '../Components/AuthForm/AuthForm';
import WelcomeContainer from '../Components/WelcomeContainer/WelcomeContainer';
import {
  continueAsGuestButtonText,
  createAccountButtonText,
  emailHint,
  passwordHint,
  signInButtonText,
  welcomeSubtitle,
  spacing
} from './loginPage.settings';

import styles from './loginPage.styles';

const LoginPage = () => {
  const [email, onEmailChange] = useState('');
  const [password, onPasswordChange] = useState('');

  const [emailValidationError, setEmailValidationError] = useState<string | null>(null);
  const [passwordValidationError, setPasswordValidationError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (emailValidationError !== null) {
      setEmailValidationError(validateEmail(email));
    }
  }, [email]);

  useEffect(() => {
    if (passwordValidationError !== null) {
      setPasswordValidationError(validatePassword(password));
    }
  }, [password]);

  const validate = (): boolean => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setEmailValidationError(emailError);
    setPasswordValidationError(passwordError);

    return [emailError, passwordError].every((e) => e === null);
  };

  const handleSignIn = () => {
    if (!validate()) {
      return;
    }
    console.log(email, password);
  };

  const handleCreateAccount = () => {
    navigate(registerRoute);
  };

  const handleContinueAsGuest = () => {};

  return (
    <div style={styles.container}>
      <WelcomeContainer subtitle={welcomeSubtitle} />
      <AuthForm>
        <TextInput hint={emailHint} onChange={onEmailChange} errorText={emailValidationError} />
        <Spacer height={spacing} />
        <TextInput
          hint={passwordHint}
          onChange={onPasswordChange}
          errorText={passwordValidationError}
        />
        <Spacer height={spacing} />
        <Button text={signInButtonText} onClick={handleSignIn} />
        <Spacer height={spacing} />
        <Button text={createAccountButtonText} inverted onClick={handleCreateAccount} />
        <Spacer height={spacing} />
        <Button text={continueAsGuestButtonText} inverted onClick={handleContinueAsGuest} />
      </AuthForm>
    </div>
  );
};

export default LoginPage;
