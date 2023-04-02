import { NavLink } from 'react-router-dom';
import {
  MdDarkMode as DarkModeIcon,
  //   MdOutlineDarkMode as DarkModeOutlinedIcon,
} from 'react-icons/md';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.mode}>
          <DarkModeIcon title="Dark mode on/off" />
        </span>
        <nav className={styles.navbar}>
          <ul className={styles.navlinks}>
            <li>
              <NavLink to={'/login'}>LOG IN</NavLink>
            </li>
            <li>
              <NavLink to={'/signup'}>SIGN UP</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
