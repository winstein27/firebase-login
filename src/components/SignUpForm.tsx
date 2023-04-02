import React from 'react';

import styles from './SignUpForm.module.css';

const SignUpForm = () => {
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
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <label htmlFor="confirm-password">Re-enter password</label>
        <input type="password" name="confirm-password" />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SignUpForm;
