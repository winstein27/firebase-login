import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './Root.module.css';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from '../components/Header';

const Root = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = styles[theme];
  }, [theme]);

  return (
    <>
      <ToastContainer theme={theme} />
      <Header theme={theme} themeClickedHandler={changeTheme} />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
