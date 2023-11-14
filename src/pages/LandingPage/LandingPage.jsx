import React, { useEffect } from "react";
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
import Checkmark from "../../assets/icons/checkmark.png";
import Peopleoutline from "../../assets/icons/peopleoutline.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LandingPage.css";
import CardLanding from "../../components/fragments/CardLanding/cardLanding";

const LandingPage = () => {
  const card = [
    {
      img: Hourglass,
      title: "Waktu Yang Fleksibel",
      desc: "Dapat menentukan sendiri waktu pelayanan terbaik Anda, kapanpun dimanapun.",
    },
    {
      img: Wallet,
      title: "Pendapatan Terjamin",
      desc: "Tidak perlu khawatir biaya transportasi dan makan siang, fokus pada layanan konseling Anda.",
    },
    {
      img: Stethoscope,
      title: "Menjangkau Lebih banyak",
      desc: "Kesempatan memberikan kebaikan pada lapisan masyarakat yang beragam.",
    },
    {
      img: Checkmark,
      title: "Penilaian Yang Terpercaya",
      desc: "Rating dan review dari layanan Anda didapatkan secara cepat dan dapat dibagikan secara online untuk mempromosikan diri Anda secara profesional.",
    },
    {
      img: Peopleoutline,
      title: "Relasi Psikolog dan Konselor Modern",
      desc: "Bergabung dengan komunitas psikolog dan konselor online untuk saling berbagi.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="wrap">
      <Navbar />
      <div className="z-n1 position-absolute top-0 rounded-3">
        <img src={Bg1} alt="" />
      </div>

      {/* Section-1 */}
      <div className="section" data-aos="fade-up">
        <Layout>
          <div className="h-auto d-flex align-items-center ">
            <div className="img-section">
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
                  <button className="btn-daftarKonselor border border-primary text-white px-3 py-2 fw-medium rounded-pill shadow ">
                    Daftar Sebagai Konselor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>

      {/* Section-2 */}
      <div class="section">
        <div className="z-n1 position-absolute top-150 end-0 translate-middle-y">
          <img src={Bg2} alt="" />
        </div>
        <Layout>
          <div className="d-flex justify-content-center">
            <p className="text2 fs-1 fw-bolder" data-aos="fade-left">
              Yang Anda Dapatkan sebagai Konselor EmpathiCare:
            </p>
          </div>

          <div className="container-card d-flex grid gap-4 justify-content-center ">
            {card
              .filter((item, index) => index < 3)
              .map((item) => (
                <div className="card-section2 grid gap-5">
                  <CardLanding data={item} />
                </div>
              ))}
          </div>

          <div className="container-card d-flex grid gap-4 justify-content-center ">
            {card
              .filter((item, index) => index > 2)
              .map((item) => (
                <div className="card-section2 ">
                  <CardLanding data={item} />
                </div>
              ))}
          </div>
        </Layout>
        <div className="bg-section2 overflow-hidden z-n1 position-absolute start-0 translate-middle-y">
          <img src={Bg3} alt="" />
        </div>
      </div>

      {/* Section-3 */}
      <div className="section">
        <div className="bg-section-conselor">
          <Layout>
            <div className="card-conselor bg-white" data-aos="zoom-out">
              <div className="card-content gap-5 d-flex mx-5">
                <div className="img d-flex justify-content-center align-items-center">
                  <div className="circle1riliv d-flex justify-content-center">
                    <div className="circle2riliv">
                      <img src={img1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="grid align-items-center">
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
                    <p className="fw-semibold">
                      Charlie Philips, S.Psi., M.Psi. Psikolog
                    </p>
                    <p className="fst-italic">
                      Clinical Psychology, Career & Human Resource, Relationsip
                      Conflict, Self Problem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </div>

      {/* Section-4 */}
      <div className="section">
        <div className="bg-section4">
          <Layout>
            <div className="d-flex">
              <div>
                <div>
                  <p className="text2 fs-1 fw-bold" data-aos="fade-right">
                    Syarat Bergabung di EmpathiCare harus Memiliki:
                  </p>
                </div>
                <div className="lh-1 mt-5 fs-4 fw-lg" data-aos="fade-right">
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
                        <p className="fw-semibold">
                          Senin - jumat 08.00 - 21.00
                        </p>
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="mt-5" data-aos="fade-up">
                  <button className="btn-daftarSekarang bg-primary text-white rounded-pill px-5 py-2 border border-primary fw-semibold shadow-sm">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
              <div className="img-section" data-aos="fade-left">
                <img src={Amico} alt="" />
              </div>
            </div>
          </Layout>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
