import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.mode}>Dark mode</span>
        <nav className={styles.navbar}>
          <ul className={styles.navlinks}>
            <li>LOG IN</li>
            <li>SIGN UP</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
