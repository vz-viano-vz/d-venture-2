import React from 'react';
import dynamic from 'next/dynamic';
import Navdash from '../component/Navdash';
import Image from 'next/image';
import gunung1 from '../assets/gunung1.png';

// const Map = dynamic(() => import('../component/map/Map'), { ssr: false });

export default function ekowisata() {
  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            &lt; Dashboard
          </a>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-lg-3">
            <div class="card" style="width: 18rem;">
              {/* <Image src={gunung1} class="card-img-top" alt="" /> */}
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col col-lg-9">{/* <Map /> */}</div>
        </div>
      </div>
    </div>
  );
}
