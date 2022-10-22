import { router } from 'next/router';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from '../../styles/Home.module.css';
import Navdash from '../../component/Navdash';


const dashboard = () => {
  const currentUser = useAuth();
  console.log(currentUser);

  return (
    <div>
      <div class={styles.bgblue}>
        <div class={styles.container}>
          <Navdash />
          <h1 class="text-center">Eco Wisata</h1>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
