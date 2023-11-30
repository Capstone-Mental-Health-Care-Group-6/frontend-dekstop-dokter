import React from "react";
import "./Footer.css";
import { Appstore, Googleplay, logoEmpathiCare } from "../../../../image";
import { Link } from "react-router-dom";

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
              <li class="nav-itemFooter mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Konseling
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3 fw-medium">
            <h5 className="fw-bold">Tentang Kami</h5>
            <ul class="nav flex-column">
              <li class="nav-itemFooter mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Blog
                </a>
              </li>
              <li class="nav-itemFooter mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Tentang Kami
                </a>
              </li>
              <li class="nav-itemFooter mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Kontak
                </a>
              </li>
              <li class="nav-itemFooter mb-2">
                <Link to={"/login-dokter"} className="text-decoration-none">
                  <a href="/login-dokter" class="nav-link p-0 text-muted">
                    Gabung Sebagai Konselor
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div class="col mb-3 fw-medium">
            <h5 className="fw-bold">lainnya</h5>
            <ul class="nav flex-column">
              <li class="nav-itemFooter mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Harga Konseling
                </a>
              </li>
              <li class="nav-itemFooter mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Kebijakan Privasi
                </a>
              </li>
              <li class="nav-itemFooter mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Syarat dan ketentuan
                </a>
              </li>
              <li class="nav-itemFooter mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className="copyright">
        <div className="copyright-text text-center py-4 fs-5 fw-bold">
          PT. EmpathiCare Psikologi Indonesia | Everyone deserves to be happy
        </div>
      </div>
    </div>
  );
};

export default Footer;
