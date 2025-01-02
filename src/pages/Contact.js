import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';
import Layout from './Layout';

const Contact = () => {
  return (
<Layout>

<div className={styles.contactContainer}>
      <div className={styles.header}>
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me!</p>
      </div>

      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <span className={styles.contactText}>phanidimple258@gmail.com</span>
        </div>
        
        <div className={styles.contactItem}>
          <FaPhone className={styles.icon} />
          <span className={styles.contactText}>8464012612</span>
        </div>
      </div>
    </div>


</Layout>
  );
};

export default Contact;
