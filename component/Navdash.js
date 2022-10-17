import React from 'react';
import Link from 'next/link';

const Navdash = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item mx-4">
                <Link href="/dashboard/palam">
                  <a class="nav-link text-white">Palam</a>
                </Link>
              </li>
              <li class="nav-item mx-4">
                <Link href="/dashboard/ecoscan">
                  <a class="nav-link text-white">Eco Scan</a>
                </Link>
              </li>
              <li class="nav-item mx-4">
                <Link href="/dashboard/spotfoto">
                  <a class="nav-link text-white">Spot Foto</a>
                </Link>
              </li>
              <li class="nav-item mx-4">
                <Link href="/dashboard/todo">
                  <a class="nav-link text-white">To-do List</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navdash;
