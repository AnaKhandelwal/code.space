import React from "react";
import styles from "./Landing.module.css"; // Import CSS Module
import Typewriter from "./Typewriter";
import Anima from "./Anima";

const Landing = ({ setPage }) => {
  return (
    <div className={styles.cover}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="_code.space.png" alt="Logo" />
        </div>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Our Platform</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </nav>
        <button className={styles.btnOutline} onClick={() => setPage("login")}>
          Log In
        </button>
      </header>

      <section className={styles.hero}>
        <h1>
          One Platform, <br />
          <span>
            <Typewriter text="Endless Possibilities." />
          </span>
        </h1>
        <p>
          From automation to collaboration, our platform empowers you to work smarter, not harder. Discover the endless possibilities waiting for you.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.btnSecondary} onClick={() => setPage("getStarted")}>
            Get Started Now
          </button>
        </div>
      </section>

      <section className={styles.platform}>
        <img className={styles.home} src="homepage.png" alt="Platform Preview" />
      </section>

      <section className={styles.showcase}>
        <Anima />
      </section>
      <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; 2025 Your Website. All rights reserved.</p>
                <div className={styles.footerLinks}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.footerContactSection}>
                <h3>Contact Us</h3>
                <div className={styles.footerContact}>
                    <p><strong>Email:</strong> contact@yourwebsite.com</p>
                    <p><strong>Phone:</strong> +1 234 567 890</p>
                    <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.footerSocialSection}>
                <h3>Follow Us</h3>
                <div className={styles.footerSocial}>
                    <p><a href="#">Facebook</a></p>
                    <p><a href="#">Twitter</a></p>
                    <p><a href="#">Instagram</a></p>
                </div>
            </div>
        </footer>
    </div>
    
  );
};

export default Landing;
