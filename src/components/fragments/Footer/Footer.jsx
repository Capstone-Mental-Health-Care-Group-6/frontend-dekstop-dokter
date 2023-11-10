import React from "react";
import logoEmpathiCare from "../../../assets/logoEmpathiCareFooter.png";
import Googleplay from "../../../assets/googleplay.png";
import Appstore from "../../../assets/appstore.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 border-top border-black">
          <div class="col mb-3">
            <div className="">
              <div className="mb-4">
                <button className="bg-transparent border-0">
                  <img src={logoEmpathiCare} alt="" />
                </button>
              </div>
              <button className="bg-transparent border-0 mb-2">
                <img src={Googleplay} alt="" />
              </button>
              <button className="bg-transparent border-0">
                <img src={Appstore} alt="" />
              </button>
            </div>
          </div>

          <div class="col mb-3 fw-medium">
            <h5 className="fw-bold">Layanan Kami</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Konseling
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3 fw-medium">
            <h5 className="fw-bold">Tentang Kami</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Blog
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Tentang Kami
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Kontak
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Gabung Sebagai Konselor
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3 fw-medium">
            <h5 className="fw-bold">lainnya</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Harga Konseling
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Kebijakan Privasi
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Syarat dan ketentuan
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className="copyright">
        <div className="text-center py-4 fs-5 fw-bold">
          PT. EmpathiCare Psikologi Indonesia | Everyone deserves to be happy
        </div>
      </div>
    </div>

    // <footer class="text-center text-lg-start bg-white text-muted">
    //   <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    //     <div class="me-5 d-none d-lg-block">
    //       <span>Get connected with us on social networks:</span>
    //     </div>

    //     <div>
    //       <a href="" class="me-4 link-secondary">
    //         <i class="fab fa-facebook-f"></i>
    //       </a>
    //       <a href="" class="me-4 link-secondary">
    //         <i class="fab fa-twitter"></i>
    //       </a>
    //       <a href="" class="me-4 link-secondary">
    //         <i class="fab fa-google"></i>
    //       </a>
    //       <a href="" class="me-4 link-secondary">
    //         <i class="fab fa-instagram"></i>
    //       </a>
    //       <a href="" class="me-4 link-secondary">
    //         <i class="fab fa-linkedin"></i>
    //       </a>
    //       <a href="" class="me-4 link-secondary">
    //         <i class="fab fa-github"></i>
    //       </a>
    //     </div>
    //   </section>

    //   <section class="">
    //     <div class="container text-center text-md-start mt-5">
    //       <div class="row mt-3">
    //         <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
    //           <h6 class="text-uppercase fw-bold mb-4">
    //             <i class="fas fa-gem me-3 text-secondary"></i>Company name
    //           </h6>
    //           <p>
    //             Here you can use rows and columns to organize your footer
    //             content. Lorem ipsum dolor sit amet, consectetur adipisicing
    //             elit.
    //           </p>
    //         </div>

    //         <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    //           <h6 class="text-uppercase fw-bold mb-4">Products</h6>
    //           <p>
    //             <a href="#!" class="text-reset">
    //               Angular
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" class="text-reset">
    //               React
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" class="text-reset">
    //               Vue
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" class="text-reset">
    //               Laravel
    //             </a>
    //           </p>
    //         </div>

    //         <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    //           <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
    //           <p>
    //             <a href="#!" class="text-reset">
    //               Pricing
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" class="text-reset">
    //               Settings
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" class="text-reset">
    //               Orders
    //             </a>
    //           </p>
    //           <p>
    //             <a href="#!" class="text-reset">
    //               Help
    //             </a>
    //           </p>
    //         </div>

    //         <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    //           <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
    //           <p>
    //             <i class="fas fa-home me-3 text-secondary"></i> New York, NY
    //             10012, US
    //           </p>
    //           <p>
    //             <i class="fas fa-envelope me-3 text-secondary"></i>
    //             info@example.com
    //           </p>
    //           <p>
    //             <i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88
    //           </p>
    //           <p>
    //             <i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <div
    //     class="text-center p-4"
    //     style="background-color: rgba(0, 0, 0, 0.025);"
    //   >
    //     © 2021 Copyright:
    //     <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
    //       MDBootstrap.com
    //     </a>
    //   </div>
    // </footer>
  );
};

export default Footer;
