import { FaChevronDown } from "react-icons/fa";
import styles from "./../styles/nav.module.css";
import logo from "./../assets/images/logo.png";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <span className={styles.link}>
          <p>Pricing</p>
        </span>
        <span className={styles.link}>
          <p>Features</p>
        </span>
        <span className={styles.link}>
          <p>Integration</p>
          <FaChevronDown />
        </span>
        <span className={styles.link}>
          <p>Company</p>
        </span>
      </div>
      <div className={styles.btns}>
        <button className={styles.signupBtn}>Sign in</button>
        <button className={styles.loginBtn}>Sign up</button>
      </div>
    </nav>
  );
};

export default Nav;
