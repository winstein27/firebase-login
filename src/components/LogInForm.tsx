import React from 'react';

import styles from './LogInForm.module.css';

import Button from '../UI/Button';

const LogInForm = () => {
  const submittedFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form
        action="POST"
        onSubmit={submittedFormHandler}
        className={styles.form}
      >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <Button type="button">Login</Button>
      </form>
    </div>
  );
};

export default LogInForm;
