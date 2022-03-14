import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Apple } from "../assets/apple.svg";
import { ReactComponent as Google } from "../assets/google.svg";
import { ReactComponent as Watch } from "../assets/icon-watch.svg";
import phone from "../assets/PhoneMockup.png";
import Button from "../components/Button";
import styles from "./Header.module.css";

const Header = () => {
  const deeplinkGoogle = "https://www.google.com/search?q=deeplink";
  const deeplinkApple = "https://www.google.com/search?q=deeplink";
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.headerContainerLogo}>
          <Link to="/">
            <Logo />
          </Link>
          <nav className={styles.headerNav}>
            <Link className={styles.headerLink} to="/features">
              Features
            </Link>
            <Link className={styles.headerLink} to="/pricing">
              Pricing
            </Link>
            <Link className={styles.headerLink} to="/careers">
              Careers
            </Link>
            <Link className={styles.headerLink} to="/careers">
              Help
            </Link>
          </nav>
        </div>
        <div className={styles.headerNavApps}>
          <a className={styles.headerLinkApps} href={deeplinkGoogle}>
            <Google />
          </a>
          <a className={styles.headerLinkApps} href={deeplinkApple}>
            <Apple />
          </a>
        </div>
      </div>
      <div className={`container ${styles.bannerContainer}`}>
        <div className={styles.bannerContainerText}>
          <h1 className={styles.bannerTitle}>
            The easiest way to manage projects
          </h1>
          <p className={styles.bannerText}>
            From the small stuff to the big picture, organizes the work so teams
            know what to do, why it matters, and how to get it done.
          </p>
          <div className={styles.bannerContainerBtn}>
            <Button styleElement="purple">Get Started</Button>
            <Button styleElement="transparent">
              <Watch className={styles.iconWatch} />
              Watch Video
            </Button>
          </div>
        </div>
        <img className={styles.imgPhone} src={phone} alt="mockup Phone" />
      </div>
    </header>
  );
};

export default Header;
