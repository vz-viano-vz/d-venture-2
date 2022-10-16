import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../component/Navbar';
const contact = () => {
  return (
    <div>
      <div class={styles.bgblue}>
        <div class={styles.containerx}>
          <Navbar />
          <br />
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default contact;
