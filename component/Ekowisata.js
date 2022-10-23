import React from 'react';
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('../component/map/Map'), { ssr: false });
export default function Ekowisata() {
  return (
    <div>
      {/* <nav class="navbar bg-light">
        <div class="container-fluid">
                <a class="navbar-brand" href="#">&lt; Dashboard</a>
        </div>
    </nav> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col col-lg-3" style={{overflow:'auto', height: '85vh'}}>
            <div class="card my-2" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title">Wana Tirta Mangrove Forest</h5>
                <p class="card-text">Kulon progo</p>
                <a href="https://goo.gl/maps/M1MyJiu7qV6dvzPZ6" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card my-2" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title">Taman Sungai Mudal</h5>
                <p class="card-text">Kulon progo</p>
                <a href="https://goo.gl/maps/XBnPC2xgCcnEH6NU8" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card my-2" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title">Umbul SidoMukti</h5>
                <p class="card-text">Kulon progo</p>
                <a href="https://goo.gl/maps/T7gPqQvF2JH4p7DY9" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card my-2" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title">Wisata Jatimulyo</h5>
                <p class="card-text">Kulon progo</p>
                <a href="https://goo.gl/maps/ky3pXtNTgYnGBuo98" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card my-2" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title">Mangrove Jembatan api</h5>
                <p class="card-text">Kulon progo</p>
                <a href="https://goo.gl/maps/jM5v71uWj3CW6QQw5" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card my-2" style={{ width: '18rem' }}>
              <div class="card-body">
                <h5 class="card-title">Desa Ekowisata Pancoh</h5>
                <p class="card-text">Sleman</p>
                <a href="https://goo.gl/maps/VVUBU8uapp1Mifvc9" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col col-lg-9" style={{height:'100vh'}}>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
