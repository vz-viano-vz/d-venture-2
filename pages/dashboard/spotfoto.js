import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Navdash from '../../component/Navdash';
import Gal1 from '../../component/image/Gal1';
import Gal2 from '../../component/image/Gal2';
import Gal3 from '../../component/image/Gal3';
import Gal4 from '../../component/image/Gal4';
import Gal5 from '../../component/image/Gal5';

const spotfoto = () => {
  return (
    <div>
      <div class={styles.bgblue}>
        <div class={styles.container}>
          <Navdash />
          <h1 class="text-center text-white">Spot Foto</h1>
        </div>
      </div>
      <section class="container">
        <div class="row pt-4">
          <Gal1 />
          <Gal2 />
          <Gal3 />
          <Gal4 />
        </div>
        <div class="row pt-4">
          <Gal4 />
          <Gal5 />
          <Gal1 />
          <Gal2 />
        </div>
        <div class="row pt-4">
          <Gal1 />
          <Gal2 />
          <Gal3 />
          <Gal4 />
        </div>
        <div class="row pt-4">
          <Gal4 />
          <Gal5 />
          <Gal1 />
          <Gal2 />
        </div>
      </section>
    </div>
  );
};

export default spotfoto;
