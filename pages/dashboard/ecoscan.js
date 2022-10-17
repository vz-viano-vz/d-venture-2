import React from 'react';
import styles from '../../styles/Home.module.css';
import Navdash from '../../component/Navdash';

const ecoscan = () => {
  return (
    <div>
      <div>
        <div class={styles.bgblue}>
          <div class={styles.containerx}>
            <Navdash />
            <h1 class="text-center">Eco Scan</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ecoscan;
