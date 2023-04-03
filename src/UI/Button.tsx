import React from 'react';

import styles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  type: 'submit' | 'button' | 'reset';
}

const Button = (props: Props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
