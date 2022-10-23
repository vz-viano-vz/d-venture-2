import React from 'react';
import styles from '../../styles/Home.module.css';
import Navdash from '../../component/Navdash';
import 'bootstrap/dist/css/bootstrap.css'
import CardHutan from '../../component/artikel/hutan/CardHutan';
import CardKarang from '../../component/artikel/terumbu-karang/CardKarang';
import CardPantai from '../../component/artikel/pantai/CardPantai';
const palam = () => {
  return (
    <div>
      <div class={styles.bgblue}>
        
          <Navdash />
          <header class="masthead text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                
                <h1 class="display-1 fs-1 fw-bold text-uppercase mb-0 mt-5  ">Panduan alam</h1>
                <p class="masthead-subheading font-weight-light mb-5 mt-2">Mengisi liburan dengan mengunjungi tempat-tempat yang masih terjaga keaslian alamnya, menikmati budaya masyarakat yang khas, dan ikut menjaga kelestarian alam di tempat tersebut, bisa jadi petualangan yang bukan hanya menyenangkan tapi juga menambah wawasan.</p>
            </div>
          </header>
        
      </div>
      <section class="page-section portfolio" id="portfolio">
            <div class="container">
                

                
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <div class="row justify-content-center">
                    
                    <CardHutan/>
                    <CardKarang/>
                    <CardPantai/>
                    
                    
                </div>
            </div>
        </section>
       
    </div>
  );
};

export default palam;
