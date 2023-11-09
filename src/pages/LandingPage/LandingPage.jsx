import React from "react";
import "./landingPage.css";
import Navbar from "../../components/fragments/Navbar/Navbar";
import Footer from "../../components/fragments/Footer/Footer";
import Layout from "../../components/layouts/landingLayout";
import Cuate from "../../assets/cuate.png";
import Amico from "../../assets/amico.png";
import img1 from "../../assets/images/profile.png";
import Bg1 from "../../assets/background/Circle.png";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="z-n1 position-absolute top-0 rounded-3">
        <img src={Bg1} alt="" />
      </div>
      <Layout>
        <div className="section1 position-relative h-auto d-flex align-items-cente ">
          <div>
            <img src={Cuate} alt="" />
          </div>
          <div>
            <div className="grid align-items-center">
              <div>
                <p className="text1Section1 fs-1 fw-bolder">
                  Kamu Seorang Konselor dan Ingin Menjadi Bagian <br />
                  dari Solusi?
                </p>
              </div>
              <div className="">
                <p>
                  Bersama kami, mari wujudkan misi agar masyarakat Indonesia
                  mendapatkan akses bantuan profesional yang lebih baik sehingga
                  akan ada lebih banyak orang yang terbantu dalam peningkatan
                  kualitas kesehatan mental.
                </p>
              </div>
              <div>
                <button className="px-3 py-2 border border-0 bg-primary text-white fw-medium rounded-pill ">
                  Daftar Sebagai Konselor
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="section2">
          <div className="d-flex justify-content-center">
            <p className="text1Section2 fs-1 fw-bolder">
              Yang Anda Dapatkan sebagai Konselor EmpathiCare:
            </p>
          </div>

          <div className="d-flex">
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>Waktu Yang Fleksibel</p>
              </div>
              <div>
                <p>
                  Dapat menentukan sendiri waktu pelayanan terbaik Anda,
                  kapanpun dimanapun.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>Pendapatan Terjamin</p>
              </div>
              <div>
                <p>
                  Tidak perlu khawatir biaya transportasi dan makan siang, fokus
                  pada layanan konseling Anda.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>Menjangkau Lebih Banyak</p>
              </div>
              <div>
                <p>
                  Kesempatan memberikan kebaikan pada lapisan masyarakat yang
                  beragam.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>Penilaian yang Terpercaya</p>
              </div>
              <div>
                <p>
                  Rating dan review dari layanan Anda didapatkan secara cepat
                  dan dapat dibagikan secara online untuk mempromosikan diri
                  Anda secara profesional.
                </p>
              </div>
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>Relasi Psikolog dan Konselor Modern</p>
              </div>
              <div>
                <p>
                  Bergabung dengan komunitas psikolog dan konselor online untuk
                  saling berbagi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="d-flex">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <div>
                <p>
                  “Riliv membuat layanan psikolog bisa menjangkau banyak orang
                  tanpa batasan fisik. Riliv menjadi media yang membantu
                  menghubungkan teman-teman yang membutuhkan dengan psikolog.
                  Promosi kesehatan mental yang dilakukan meningkatkan awareness
                  banyak orang untuk tidak takut ke psikolog dan pelan-pelan
                  mengikis stigma yang ada di masyarakat.”
                </p>
              </div>
              <div>
                <p>Charlie Philips, S.Psi., M.Psi. Psikolog</p>
                <p>
                  Clinical Psychology, Career & Human Resource, Relationsip
                  Conflict, Self Problem
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section4">
          <div className="d-flex">
            <div>
              <div>
                <p>Syarat Bergabung di EmpathiCare harus Memiliki:</p>
              </div>
              <div>
                <ul>
                  <li>
                    <p>Surat Izin Praktik Psikolog (SIPP) yang masih berlaku</p>
                  </li>
                  <li>
                    <p>Smartphone Android versi 4.4 atau lebih</p>
                  </li>
                  <li>
                    <p>Akun Whatsapp atau Line</p>
                  </li>
                  <li>
                    <p>Koneksi internet yang memadai</p>
                  </li>
                  <li>
                    <p>Waktu luang antara Senin - jumat 08.00 - 21.00</p>
                  </li>
                </ul>
              </div>
              <div>
                <button>Daftar Sekarang</button>
              </div>
            </div>
            <div>
              <img src={Amico} alt="" />
            </div>
          </div>
        </div>

        <Footer />
      </Layout>
    </>
  );
};

export default LandingPage;
