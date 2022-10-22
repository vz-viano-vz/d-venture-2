import { router } from 'next/router';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from '../../styles/Home.module.css';
import Navdash from '../../component/Navdash';
const Map = dynamic(() => import('../../component/map/Map'), { ssr: false });

export default dashboard = () => {
  const currentUser = useAuth();
  console.log(currentUser);

  return (
    <div>
      <div class={styles.bgblue}>
        <div class={styles.containerx}>
          <Navdash />
          <h1 class="text-center">Eco Wisata</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col col-lg-3">hello</div>
              <div className="col col-lg-9">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
