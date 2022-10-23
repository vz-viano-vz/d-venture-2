import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const CardHutan = () => {
    return ( 
        <div class="col-md-6 col-lg-4 mb-5 mt-3">
        <div class="card" style={{width: "18rem"}}>
          <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/10190/GettyImages-499689946.jpg" class="card-img-top" alt="."/>
          <div class="card-body">
            <h5 class="card-title">Panduan Pariwisata Hutan</h5>
            <p class="card-text"> Hutan merupakan suatu ekosistem yang kurang lebih rapat dan luas, sehingga tercipta kondisi iklim dan ekologis yang berbeda dengan kondisi ekosistem di luar hutan.</p>
            <a href="https://ilmugeografi.com/ilmu-bumi/hutan/cara-menjaga-kelestarian-hutan" class="btn btn-primary">Lihat Panduan</a>
          </div>
        </div>
      </div>
     );
}
 
export default CardHutan;