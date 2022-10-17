import { router } from 'next/router';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../component/Navbar';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const dashboard = () => {
  const currentUser = useAuth();
  console.log(currentUser);

  return (
    <div>
      <div class={styles.bgblue}>
        <div class={styles.containerx}>
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li class="nav-item">
                    <Link href="#">
                      <a class="nav-link text-white">Palam</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link href="#">
                      <a class="nav-link text-white">Eco Scan</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link href="/dashboard/spotfoto">
                      <a class="nav-link text-white">Spot Foto</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <br />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
