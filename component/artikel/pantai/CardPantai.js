import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const CardPantai = () => {
    return ( 
        <div class="col-md-6 col-lg-4 mb-5 mt-3">
        <div class="card" style={{width: "18rem"}}>
          <img src="https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg" class="card-img-top" alt="."/>
          <div class="card-body">
            <h5 class="card-title">Panduan Pariwisata Pantai</h5>
            <p class="card-text"> Wilayah pesisir merupakan daerah pertemuan antara darat dan laut. Kearah darat wilayah pesisir meliputi bagian daratan, baik kering maupun terendam air asin.</p>
            <a href="#" class="btn btn-primary">Lihat Panduan</a>
          </div>
        </div>
      </div>
     );
}
 
export default CardPantai;