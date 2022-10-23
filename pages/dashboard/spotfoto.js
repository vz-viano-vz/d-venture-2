import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Navdash from '../../component/Navdash';
import Image from 'next/image';

const spotfoto = () => {
  return (
    <div>
      <div class={styles.bgblue}>
        <div class={styles.containerx}>
          <Navdash />
          <h1 class="text-center">Spot Foto</h1>
          <div class="">
            <div class="card" style="width: 18rem;">
              <Image src="" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Wana Tirta Mangrove Forest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default spotfoto;
