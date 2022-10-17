import React from 'react';
import Navbar from '../component/Navbar';
import styles from '../styles/Home.module.css';

const about = () => {
  return (
    <div>
      <div class={styles.bgblue}>
        <div class={styles.containerx}>
          <Navbar />
          <h1>About</h1>
        </div>
      </div>
    </div>
  );
};

export default about;
