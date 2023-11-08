import React from "react";
import logoEmpathiCare from "../../../assets/logoEmpathiCare.png";
import logoKemenkes from "../../../assets/logokemenkes.png";

const Navbar = () => {
  return (
    <div class='d-flex justify-content-center' >
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid gap-0 column-gap-4 d-flex justify-content-center ">
          <div>
            <a class="navbar-brand d-flex p-2 g-col-6 column-gap-4 " href="#">
              <img src={logoEmpathiCare} alt="" />
              <div class="vr"></div>
              <img src={logoKemenkes} alt="" />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse p-2 g-col-6"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Register
                </a>
              </li>
            </ul>

            <button class="rounded-pill mx-5 bg-transparent border-primary">
              <a class="nav-link my-2 mx-2 text-primary">Download Sekarang</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
