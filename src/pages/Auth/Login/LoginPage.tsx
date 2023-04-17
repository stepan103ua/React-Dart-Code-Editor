import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Spacer from '../../../components/Spacer/Spacer';
import TextInput from '../../../components/TextInput/TextInput';
import { homeRoute, registerRoute } from '../../../values/routes';
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
import { useLoginMutation } from '../../../store/reducers/authApiSlice';
import { CustomErrorResponse } from '../../../responses/responseError';
import Snackbar from '../../../components/Snackbar/Snackbar';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../store/reducers/authSlice';
import { AuthResponse } from '../../../responses/authResponse';

const LoginPage = () => {
  const [email, onEmailChange] = useState('');
  const [password, onPasswordChange] = useState('');

  const [emailValidationError, setEmailValidationError] = useState<string | null>(null);
  const [passwordValidationError, setPasswordValidationError] = useState<string | null>(null);

  const [loginError, setLoginError] = useState<string | null>(null);

  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

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
    if (!validate()) return;
    try {
      login({ email, password })
        .unwrap()
        .catch((e: CustomErrorResponse) => {
          console.log(e.data.error);
          setLoginError(e.data.error);
        })
        .then((response) => {
          console.log(response);
          const token = (response as AuthResponse).accessToken;
          dispatch(setCredentials({ token }));
          navigate('/');
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateAccount = () => {
    navigate(registerRoute);
  };

  const handleContinueAsGuest = () => {
    navigate(homeRoute);
  };

  const handleCloseErrorSnackbar = () => {
    setLoginError(null);
  };

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
        {loginError != null ? (
          <Snackbar text={loginError} onClose={handleCloseErrorSnackbar} />
        ) : (
          <></>
        )}
        <Spacer height={spacing} />
        <Button text={signInButtonText} onClick={handleSignIn} disabled={isLoading} />
        <Spacer height={spacing} />
        <Button
          text={createAccountButtonText}
          inverted
          onClick={handleCreateAccount}
          disabled={isLoading}
        />
        <Spacer height={spacing} />
        <Button
          text={continueAsGuestButtonText}
          inverted
          onClick={handleContinueAsGuest}
          disabled={isLoading}
        />
      </AuthForm>
    </div>
  );
};

export default LoginPage;
