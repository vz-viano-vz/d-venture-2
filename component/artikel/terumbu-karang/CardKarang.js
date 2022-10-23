import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const CardKarang = () => {
    return ( 
        <div class="col-md-6 col-lg-3 mb-5 mt-3">
        <div class="card" style={{width: "18rem"}}>
          <img src="https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/6/29/GettyImages-1189048716.jpg.rend.hgtvcom.616.411.suffix/1624995019897.jpeg" class="card-img-top" alt="."/>
          <div class="card-body">
            <h5 class="card-title">Panduan Pariwisata Terumbu Karang</h5>
            <p class="card-text"> Ekosistem terumbu karang merupakan ekosistem alami yang memiliki karakteristik dan memerlukan kondisi khusus.</p>
            <a href="#" class="btn btn-primary">Lihat Panduan</a>
          </div>
        </div>
      </div>
     );
}
 
export default CardKarang;