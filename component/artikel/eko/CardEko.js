import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const CardEko = () => {
    return ( 
        <div class="col-md-6 col-lg-3 mb-5 mt-3">
        <div class="card" style={{width: "18rem"}}>
          <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/10190/GettyImages-499689946.jpg" class="card-img-top" alt="."/>
          <div class="card-body">
            <h5 class="card-title">Apa itu Ekowisata ?</h5>
            <p class="card-text"> Ekowisata adalah “Perjalanan wisata yang bertanggung jawab dengan ikut melestarikan lingkungan, mendukung kesejahteraan masyarakat di sekitarnya.</p>
            <a href="#" class="btn btn-primary">Lihat Panduan</a>
          </div>
        </div>
      </div>
     );
}
 
export default CardEko;