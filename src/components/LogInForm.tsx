import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import styles from './LogInForm.module.css';

import UserContext from '../store/UserContext';

import useInput from '../hooks/useInput';

import Button from './UI/Button';

const LogInForm = () => {
  const userCtx = useContext(UserContext);
  const navigator = useNavigate();

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
    validation: (password) => password.trim().length > 0,
  });

  const submittedFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredencial) => {
        userCtx.logUserIn(userCredencial);
        navigator('/welcome');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <form
        action="POST"
        onSubmit={submittedFormHandler}
        className={styles.form}
      >
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

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LogInForm;
