import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Navdash from '../../component/Navdash';

const spotfoto = () => {
  return (
    <div>
      <div class={styles.bgblue}>
        <div class={styles.containerx}>
          <Navdash />
          <h1 class="text-center">Spot Foto</h1>
        </div>
      </div>
    </div>
  );
};

export default spotfoto;
