import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h3>Contact Us</h3>
          <p>MDR homes, Hyderabad, India</p>
          <p>Email: phanidimple258@gmail.com</p>
          <p>Phone: +91 8464012612</p>
        </div>

        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.aboutUs}>
          <h3>About Us</h3>
          <p>
            We are a leading company in the tech industry, providing innovative solutions to
            businesses worldwide. Our mission is to help you achieve success through cutting-edge
            technology and exceptional customer service.
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
