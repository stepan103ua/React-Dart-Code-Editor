import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import CircularProgressIndicator from '../../../components/CircularProgressIndicator/CircularProgressIndicator';
import Spacer from '../../../components/Spacer/Spacer';
import TextInput from '../../../components/TextInput/TextInput';
import { loginRoute } from '../../../values/routes';
import {
  validateConfirmPassword,
  validateEmail,
  validateField,
  validatePassword
} from '../../../values/validation';
import AuthForm from '../Components/AuthForm/AuthForm';
import WelcomeContainer from '../Components/WelcomeContainer/WelcomeContainer';
import styles from './registerPage.module.css';
import {
  backToLoginButtonText,
  confirmPasswordHint,
  emailHint,
  passwordHint,
  signUpButtonText,
  spacing,
  usernameHint,
  welcomeSubtitle
} from './registerPage.settings';

const RegisterPage = () => {
  const [username, onUsernameChange] = useState('');
  const [email, onEmailChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [confirmPassword, onConfirmPasswordChange] = useState('');
  const [loading, setLoading] = useState(false);

  const [usernameValidationError, setUsernameValidationError] = useState<string | null>(null);
  const [emailValidationError, setEmailValidationError] = useState<string | null>(null);
  const [passwordValidationError, setPasswordValidationError] = useState<string | null>(null);
  const [confirmPasswordValidationError, setConfirmPasswordValidationError] = useState<
    string | null
  >(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (usernameValidationError !== null) {
      setUsernameValidationError(validateField(username));
    }
  }, [username]);

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

  useEffect(() => {
    if (confirmPasswordValidationError != null) {
      setConfirmPasswordValidationError(validateConfirmPassword(password, confirmPassword));
    }
  }, [confirmPassword, password]);

  const validate = (): boolean => {
    const usernameError = validateField(username);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);

    setUsernameValidationError(usernameError);
    setEmailValidationError(emailError);
    setPasswordValidationError(passwordError);
    setConfirmPasswordValidationError(confirmPasswordError);

    return [usernameError, emailError, passwordError, confirmPasswordError].every(
      (e) => e === null
    );
  };

  const handleOnSignUp = () => {
    if (!validate()) {
      return;
    }
    console.log(username, email, password, confirmPassword);
    setLoading(true);
  };

  const handleBackToLogin = () => {
    navigate(loginRoute);
  };

  return (
    <div className={styles.container}>
      <WelcomeContainer subtitle={welcomeSubtitle} />
      <AuthForm>
        <TextInput
          hint={usernameHint}
          onChange={onUsernameChange}
          errorText={usernameValidationError}
        />
        <Spacer height={spacing} />
        <TextInput hint={emailHint} onChange={onEmailChange} errorText={emailValidationError} />
        <Spacer height={spacing} />
        <TextInput
          hint={passwordHint}
          onChange={onPasswordChange}
          errorText={passwordValidationError}
        />
        <Spacer height={spacing} />
        <TextInput
          hint={confirmPasswordHint}
          onChange={onConfirmPasswordChange}
          errorText={confirmPasswordValidationError}
        />
        <Spacer height={spacing} />
        {loading ? (
          <div className={styles.loader}>
            <CircularProgressIndicator />
          </div>
        ) : (
          <div>
            <Button text={signUpButtonText} onClick={handleOnSignUp} />
            <Spacer height={spacing} />
            <Button text={backToLoginButtonText} inverted onClick={handleBackToLogin} />
          </div>
        )}
      </AuthForm>
    </div>
  );
};

export default RegisterPage;
