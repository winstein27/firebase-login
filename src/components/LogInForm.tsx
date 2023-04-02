import React from 'react';

import styles from './LogInForm.module.css';

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

        <button type="button">Login</button>
      </form>
    </div>
  );
};

export default LogInForm;
