import React from "react";
import logoEmpathiCare from "../../../assets/logoEmpathiCare.png";
import logoKemenkes from "../../../assets/logokemenkes.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    // <>
    //   <nav class="navbar navbar-expand-lg bg-transparent">
    //     <div class="container-fluid column-gap-5 d-flex justify-content-center ">
    //       <div className="mx-5">
    //         <a class="navbar-brand d-flex p-2 g-col-6 column-gap-4 " href="#">
    //           <img src={logoEmpathiCare} alt="" />
    //           <div class="vr"></div>
    //           <img src={logoKemenkes} alt="" />
    //         </a>
    //       </div>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>

    //       <div
    //         class="collapse navbar-collapse mx-5 p-2 g-col-6"
    //         id="navbarSupportedContent"
    //       >
    //         <ul class="navbar-nav mb-2 mb-lg-0">
    //           <li class="nav-item">
    //             <a class="nav-link" aria-current="page" href="#">
    //               Home
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">
    //               Service
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">
    //               About Us
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">
    //               Register
    //             </a>
    //           </li>
    //         </ul>

    //         <button class="rounded-pill mx-5 bg-transparent border-primary">
    //           <a class="nav-link my-2 mx-2 text-primary">Download Sekarang</a>
    //         </button>
    //       </div>
    //     </div>
    //   </nav>
    // </>
    <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
      <div class="container border-bottom border-black ">
        <a class="navbar-brand d-flex gap-3 my-2 align-items-center" href="#">
          <img src={logoEmpathiCare} alt="" />
          <div class="vr"></div>
          <div className="fs-6 lh-1 fw-semibold">
            Diawasi
            <br />
            oleh
          </div>
          <img src={logoKemenkes} alt="" />
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
            <div class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <div className="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </div>
              <div className="nav-item">
                <a class="nav-link active" href="#">
                  Link
                </a>
              </div>
              <div className="nav-item">
                <a class="nav-link active">Register</a>
              </div>
              <div className="nav-item">
                <a class="nav-link active">Dropdown</a>
              </div>
            </div>

            <button
              class="btn btn-transparent border border-primary text-primary rounded-pill my-3 px-4"
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
