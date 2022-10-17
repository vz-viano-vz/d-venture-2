import React from 'react';
import styles from '../../styles/Home.module.css';
import Navdash from '../../component/Navdash';

const palam = () => {
  return (
    <div>
      <div class={styles.bgblue}>
        <div class={styles.containerx}>
          <Navdash />
          <h1 class="text-center">Panduan Menjaga Alam (PALAM)</h1>
        </div>
      </div>
    </div>
  );
};

export default palam;
