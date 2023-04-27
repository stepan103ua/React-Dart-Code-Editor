import React, { FC, useState } from 'react';
import AppModal, { AppModalProps } from '../../../../../components/AppModal/AppModal';
import styles from './inviteMemberDialog.module.css';
import TextInput from '../../../../../components/TextInput/TextInput';
import Button from '../../../../../components/Button/Button';
import { validateEmail } from '../../../../../values/validation';

interface Props extends AppModalProps {
  onCancel: () => void;
  onInviteMember: (email: string) => void;
}

const InviteMemberDialog: FC<Props> = ({ isOpen, onCancel, onInviteMember }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleEmailInput = (value: string) => {
    setEmail(value);
  };

  const handleInvite = () => {
    const emailError = validateEmail(email);
    setEmailError(emailError);
    if (emailError !== null) {
      return;
    }

    onInviteMember(email);
  };

  return (
    <AppModal isOpen={isOpen}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h1>Invite a member</h1>
          <span className={styles.descriptionText}>To invite the member, enter his e-mail</span>
        </div>
        <TextInput hint={'E-mail'} onChange={handleEmailInput} errorText={emailError} />
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <Button text="Cancel" onClick={onCancel} inverted />
          </div>
          <div className={styles.buttonContainer}>
            <Button text="Invite" onClick={handleInvite} />
          </div>
        </div>
      </div>
    </AppModal>
  );
};

export default InviteMemberDialog;
