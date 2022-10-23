import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid px-5">
        <a class="navbar-brand" href="index.html">
          D'Venture
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item mx-3">
              <Link href="/login">
                <a class="nav-link">Login</a>
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link href="/about">
                <a class="nav-link">About</a>
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link href="/contact">
                <a class="nav-link">Contact</a>
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link href="/sign-up">
                <a class="nav-link btn btn-dark btn-sm px-2">Get Started</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
