import React, { useState } from "react";
import logoEmpathiCare from "../../../assets/logoEmpathiCare.png";
import logoKemenkes from "../../../assets/logokemenkes.png";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={
        navbar
          ? "navbar scroll navbar-expand-lg fixed-top"
          : "navbar navbar-expand-sm fixed-top"
      }
    >
      <div class="container border-bottom border-black ">
        <a class="wrap-content navbar-brand d-flex align-items-center" href="#">
          <img className="logo1" src={logoEmpathiCare} alt="" />
          <div class="vr"></div>
          <div className="text-logo lh-1 fw-semibold">
            Diawasi
            <br />
            oleh
          </div>
          <img className="logo2" src={logoKemenkes} alt="" />
        </a>

        <button
          class="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              EmpathiCare
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body align-items-center">
            <div class="navMenu navbar-nav justify-content-center flex-grow-1 pe-3">
              <div className="nav-item">
                <a class="nav-link active py-4" aria-current="page" href="#">
                  Home
                </a>
              </div>
              <div className="nav-item">
                <a class="nav-link active py-4" href="#">
                  Link
                </a>
              </div>
              <div className="nav-item">
                <a class="nav-link active py-4" href="#">
                  Register
                </a>
              </div>
              <div className="nav-item">
                <a class="nav-link active py-4" href="">
                  Dropdown
                </a>
              </div>
            </div>

            <button
              class="btn btn-transparent fw-bold border border-primary text-primary rounded-pill my-3 px-4"
              type="submit"
            >
              Download Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
