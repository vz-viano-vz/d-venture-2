import React from 'react';
import styles from '../styles/Home.module.css';
import Navdash from '../component/Navdash';
import dynamic from 'next/dynamic';
const Ekowisata = dynamic(() => import('../component/Ekowisata'), { ssr: false });

export default function ekowisata() {
  return (
    <div>
      <div >
        <Navdash />
        <div class="rounded">
          <Ekowisata />
        </div>
      </div>
    </div>
  );
}
