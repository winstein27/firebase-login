import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

import styles from './SignUpForm.module.css';

import useInput from '../hooks/useInput';

import Button from './UI/Button';

const SignUpForm = () => {
  const navigator = useNavigate();

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    touched: enteredFirstNameTouched,
    changeHandler: enteredFirstNameChangedHandler,
    blurHandler: enteredFirstNameBlurHandler,
  } = useInput({ validation: (name) => name.trim().length > 2 });

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    touched: enteredLastNameTouched,
    changeHandler: enteredLastNameChangedHandler,
    blurHandler: enteredLastNameBlurHandler,
  } = useInput({ validation: (name) => name.trim().length > 2 });

  const {
    value: enteredEmail,
    touched: enteredEmailTouched,
    isValid: enteredEmailIsValid,
    changeHandler: enteredEmailChangedHandler,
    blurHandler: enteredEmailBlurHandler,
  } = useInput({
    validation: (email) => email.includes('@') && email.includes('.'),
  });

  const {
    value: enteredPassword,
    touched: enteredPasswordTouched,
    isValid: enteredPasswordIsValid,
    changeHandler: enteredPasswordChangedHandler,
    blurHandler: enteredPasswordBlurHandler,
  } = useInput({
    validation: (password) => password.trim().length > 7,
  });

  const {
    value: enteredConfirmationPassword,
    touched: enteredConfirmationPasswordTouched,
    isValid: enteredConfirmationPasswordIsValid,
    changeHandler: enteredConfirmationPasswordChangedHandler,
    blurHandler: enteredConfirmationPasswordBlurHandler,
  } = useInput({
    validation: (password) => password === enteredPassword,
  });

  const submittedFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    enteredFirstNameBlurHandler();
    enteredLastNameBlurHandler();
    enteredEmailBlurHandler();
    enteredPasswordBlurHandler();
    enteredConfirmationPasswordBlurHandler();

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid &&
      enteredPasswordIsValid &&
      enteredConfirmationPasswordIsValid;

    if (formIsValid) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then(() => {
          toast('Account created, please login.');
          navigator('/login');
        })
        .catch((error) => {
          toast(error.message);
        });
    } else {
      if (!enteredFirstNameIsValid) {
        toast('Please, enter a valid first name.');
      }
      if (!enteredLastNameIsValid) {
        toast('Please, enter a valid last name.');
      }
      if (!enteredEmailIsValid) {
        toast('Please, enter a valid email.');
      }
      if (!enteredPasswordIsValid) {
        toast('The password should have as least 8 caracters.');
      }
      if (!enteredConfirmationPasswordIsValid) {
        toast('Entered passwords are not the same.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <form
        action="POST"
        onSubmit={submittedFormHandler}
        className={styles.form}
      >
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          name="first-name"
          value={enteredFirstName}
          onChange={enteredFirstNameChangedHandler}
          onBlur={enteredFirstNameBlurHandler}
          className={
            !enteredFirstNameIsValid && enteredFirstNameTouched
              ? styles.invalid
              : ''
          }
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          name="last-name"
          value={enteredLastName}
          onChange={enteredLastNameChangedHandler}
          onBlur={enteredLastNameBlurHandler}
          className={
            !enteredLastNameIsValid && enteredLastNameTouched
              ? styles.invalid
              : ''
          }
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={enteredEmail}
          onChange={enteredEmailChangedHandler}
          onBlur={enteredEmailBlurHandler}
          className={
            !enteredEmailIsValid && enteredEmailTouched ? styles.invalid : ''
          }
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={enteredPassword}
          onChange={enteredPasswordChangedHandler}
          onBlur={enteredPasswordBlurHandler}
          className={
            !enteredPasswordIsValid && enteredPasswordTouched
              ? styles.invalid
              : ''
          }
        />
        <label htmlFor="confirm-password">Re-enter password</label>
        <input
          type="password"
          name="confirm-password"
          value={enteredConfirmationPassword}
          onChange={enteredConfirmationPasswordChangedHandler}
          onBlur={enteredConfirmationPasswordBlurHandler}
          className={
            !enteredConfirmationPasswordIsValid &&
            enteredConfirmationPasswordTouched
              ? styles.invalid
              : ''
          }
        />

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
