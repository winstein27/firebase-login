import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  MdDarkMode as DarkModeIcon,
  //   MdOutlineDarkMode as DarkModeOutlinedIcon,
} from 'react-icons/md';

import styles from './Header.module.css';

import UserContext from '../store/UserContext';

const Header = () => {
  const userCtx = useContext(UserContext);
  const navigator = useNavigate();

  const logoutClickedHandler = () => {
    userCtx.logUserOut();
    navigator('/login');
  };

  return (
    <header className={styles.header}>
      <div>
        <span className={styles.mode}>
          <DarkModeIcon title="Dark mode on/off" />
        </span>
        <nav className={styles.navbar}>
          <ul className={styles.navlinks}>
            {userCtx.userIsLogged && (
              <li>
                <button onClick={logoutClickedHandler}>LOG OUT</button>
              </li>
            )}
            {!userCtx.userIsLogged && (
              <>
                <li>
                  <NavLink to={'/login'}>LOG IN</NavLink>
                </li>
                <li>
                  <NavLink to={'/signup'}>SIGN UP</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
