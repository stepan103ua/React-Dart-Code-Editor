import { emailRegex } from './regex';
import {
  fieldIsRequired,
  invalidEmail,
  passwordsDoNotMatch,
  shortPassword
} from './validationMessages';

const validateEmail = (email: string): string | null => {
  if (email.length === 0) {
    return fieldIsRequired;
  }
  const validationResult = String(email).toLowerCase().match(emailRegex);

  if (validationResult === null) {
    return invalidEmail;
  }

  return null;
};

const validatePassword = (password: string): string | null => {
  if (password.length < 6) {
    return shortPassword;
  }

  return null;
};

const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
  const passwordValidationResult = validatePassword(confirmPassword);

  if (passwordValidationResult != null) {
    return passwordValidationResult;
  }

  if (password !== confirmPassword) {
    return passwordsDoNotMatch;
  }

  return null;
};

const validateField = (value: string): string | null => {
  if (value.length === 0) {
    return fieldIsRequired;
  }

  return null;
};

export { validateEmail, validatePassword, validateField, validateConfirmPassword };
