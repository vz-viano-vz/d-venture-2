import styles from '../styles/Home.module.css';
import Navbar from '../component/Navbar';

// import home from '../styles/home.css'

export default function Home() {
  return (
    <div>
      <div class={styles.body}>
        <div class={styles.containerx}>
          <Navbar />
          <br />
          <header class="py-5">
            <div class="col-8 px-5 mx-auto">
              <div class="row gx-5">
                <div class="col-lg-12 col-xl-12 col-xxl-12">
                  <div class="my-5 text-xl-start">
                    <h1 class="display-5 fw-bolder text-white mb-2 text-center">D-venture</h1>
                    <p class="lead fw-normal text-white mb-4 text-center">
                     Satu-satunya Aplikasi Pariwisata alam yang mengutamakan kelestarian alam, Mempertahankan Keindahannya, dan menjaga ekosistemnya untuk keberlanjutan pariwisata alam !
                    </p>
                    <div class="d-grid gap-3 d-sm-flex align-center">
                      <a class=" btn btn-dark btn-sm py-2 px-2 text-center text-white" href="/sign-up">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div class="col-xl-5  col-md-12 col-lg-5 col-xl-5 col-xxl-5 mx-auto"><Image src={gunung2} class="img-fluid rounded-3 mx-auto" />
                </div> */}
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
