import React from "react";
import "./landingPage.css";
import Navbar from "../../components/fragments/Navbar/Navbar";
import Footer from "../../components/fragments/Footer/Footer";
import Layout from "../../components/layouts/landingLayout";
import Cuate from "../../assets/cuate.png";
import Amico from "../../assets/amico.png";
import img1 from "../../assets/images/profile.png";
import Bg1 from "../../assets/background/Circle.png";
import Bg2 from "../../assets/background/Rectangle 2709.png";
import Bg3 from "../../assets/background/Rectangle 2710.png";
import Hourglass from "../../assets/icons/hourglass.png";
import Wallet from "../../assets/icons/wallet.png";
import Stethoscope from "../../assets/icons/stethoscope.png";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="z-n1 position-absolute top-0 rounded-3">
        <img src={Bg1} alt="" />
      </div>

      <div className="section1">
        <Layout>
          <div className="position-relative h-auto d-flex align-items-center ">
            <div>
              <img src={Cuate} alt="" />
            </div>
            <div className="...">
              <div className="grid align-items-center">
                <div>
                  <p className="text1Section1 fs-1 fw-bolder">
                    Kamu Seorang Konselor <br /> dan Ingin Menjadi Bagian <br />
                    dari Solusi?
                  </p>
                </div>
                <div className="">
                  <p>
                    Bersama kami, mari wujudkan misi agar masyarakat Indonesia
                    mendapatkan akses bantuan profesional yang lebih baik
                    sehingga akan ada lebih banyak orang yang terbantu dalam
                    peningkatan kualitas kesehatan mental.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn-daftarKonselor px-3 py-2 border border-0 text-white fw-medium rounded-pill ">
                    Daftar Sebagai Konselor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>

      <div class="section2">
        <div className="z-n1 position-absolute top-150 end-0 translate-middle-y">
          <img src={Bg2} alt="" />
        </div>
        <Layout>
          <div className="d-flex justify-content-center">
            <p className="text2 fs-1 fw-bolder">
              Yang Anda Dapatkan sebagai Konselor EmpathiCare:
            </p>
          </div>

          <div className="d-flex mt-5 justify-content-center">
            {/* Card-1 */}
            <div className="card w-25 border-0 text-center bg-transparent">
              <div className="d-flex justify-content-center">
                <div className="circle1">
                  <div className="circle2">
                    <img src={Hourglass} alt="" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="fw-semibold">Waktu Yang Fleksibel</p>
                <p>
                  Dapat menentukan sendiri <br /> waktu pelayanan terbaik
                  <br /> Anda, kapanpun dimanapun.
                </p>
              </div>
            </div>

            {/* Card-2 */}
            <div className="card w-25 border-0 text-center bg-transparent">
              <div className="d-flex justify-content-center">
                <div className="circle1">
                  <div className="circle2">
                    <img src={Wallet} alt="" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="fw-semibold">Pendapatan Terjamin</p>
                <p>
                  Tidak perlu khawatir biaya <br /> transportasi dan makan{" "}
                  <br /> siang, fokus pada layanan <br /> konseling Anda.
                </p>
              </div>
            </div>

            {/* Card-3 */}
            <div className="card w-25 border-0 text-center bg-transparent">
              <div className="d-flex justify-content-center ">
                <div className="circle1">
                  <div className="circle2">
                    <img src={Stethoscope} alt="" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="fw-semibold">Menjangkau Lebih Banyak</p>
                <p>
                  Kesempatan memberikan <br />
                  kebaikan pada lapisan <br /> masyarakat yang beragam.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            {/* Card-4 */}
            <div className="card w-25 border-0 bg-transparent text-center">
              <div className="d-flex justify-content-center ">
                <div className="circle1">
                  <div className="circle2">
                    <img src={Stethoscope} alt="" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="fw-semibold">Penilaian yang Terpercaya</p>
                <p>
                  Rating dan review dari <br /> layanan Anda didapatkan <br />{" "}
                  secara cepat dan dapat <br /> dibagikan secara online <br />{" "}
                  untuk mempromosikan diri <br />
                  Anda secara profesional.
                </p>
              </div>
            </div>

            {/* Card-5 */}
            <div className="card w-25 border-0 bg-transparent text-center">
              <div className="d-flex justify-content-center ">
                <div className="circle1">
                  <div className="circle2">
                    <img src={Stethoscope} alt="" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="fw-semibold">
                  Relasi Psikolog dan Konselor <br /> Modern
                </p>
                <p>
                  Bergabung dengan <br /> komunitas psikolog dan <br /> konselor
                  online untuk saling <br /> berbagi.
                </p>
              </div>
            </div>
          </div>
        </Layout>
        <div className="z-n1 position-absolute top-200 start-0 translate-middle-y">
          <img src={Bg3} alt="" />
        </div>
      </div>

      <div className="section3 w-100">
        <Layout>
          <div className="konselorCard bg-white">
            <div className="mx-5">
              <div className="gap-5 d-flex">
                <div className="d-flex align-items-center">
                  <img src={img1} alt="" />
                </div>
                <div className="textWrap">
                  <div>
                    <p>
                      “Riliv membuat layanan psikolog bisa menjangkau banyak
                      orang tanpa batasan fisik. Riliv menjadi media yang
                      membantu menghubungkan teman-teman yang membutuhkan dengan
                      psikolog. Promosi kesehatan mental yang dilakukan
                      meningkatkan awareness banyak orang untuk tidak takut ke
                      psikolog dan pelan-pelan mengikis stigma yang ada di
                      masyarakat.”
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
          </div>
        </Layout>
      </div>

      <div className="section4">
        <Layout>
          <div className="d-flex">
            <div>
              <div>
                <p className="text2 fs-1 fw-bold">
                  Syarat Bergabung di EmpathiCare harus Memiliki:
                </p>
              </div>
              <div className="lh-1 mt-5 fs-4 fw-lg">
                <ol type="1">
                  <li>
                    <span className="d-flex gap-2">
                      Surat Izin Praktik Psikolog (SIPP) yang{" "}
                      <p className="fw-semibold">masih berlaku</p>
                    </span>
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
                    <span className="d-flex gap-2">
                      Waktu luang antara{" "}
                      <p className="fw-semibold">Senin - jumat 08.00 - 21.00</p>
                    </span>
                  </li>
                </ol>
              </div>
              <div className="mt-5">
                <button className="bg-primary text-white rounded-pill px-5 py-2 border-0 fw-semibold shadow-sm">
                  Daftar Sekarang
                </button>
              </div>
            </div>
            <div>
              <img src={Amico} alt="" />
            </div>
          </div>
        </Layout>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
