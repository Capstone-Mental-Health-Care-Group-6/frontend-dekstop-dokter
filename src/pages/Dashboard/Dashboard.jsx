import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import {
  dashboardImg,
  iconChat,
  iconChatBot,
  iconClock,
  iconPasien,
  iconZoom,
  imgDataPasienKosong,
} from "../../../image";
import "./Dashboard.css";
import Card from "../../components/fragments/Card/Card";
import TableListPasien from "../../components/fragments/TableListPasien/TableListPasien";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllCounseling } from "../../service/counseling";
import { getAllListPasien } from "../../service/listPasien";
import { getByNameLoginDoctor, login } from "../../service/authentication";
import PulseLoader from "react-spinners/PulseLoader";
import Skeleton from "react-loading-skeleton";

const Dashboard = () => {
  const [dataPasien, setDataPasien] = useState([]);
  const [userData, setUserData] = useState({});
  const [totalPasien, setTotalPasien] = useState(0);
  const [chatCount, setChatCount] = useState(0);
  const [videoCallCount, setVideoCallCount] = useState(0);

  const [namaDokter, setNamaDokter] = useState(null);
  const [loading, setLoading] = useState(false);

  const storedDataLogin = JSON.parse(localStorage.getItem("dataLogin"));

  useEffect(() => {
    setLoading(true);

    getAllListPasien((data) => {
      setDataPasien(data);

      // mendapatkan jumlah total pasien
      setTotalPasien(data.length);

      // mendapatkan jumlah layanan via chat
      const totalChat = data.filter(
        (pasien) => pasien.viaLayanan === "Chat"
      ).length;

      setChatCount(totalChat);

      // mendapatkan jumlah layanan via Vidio Call
      const totalVidioCall = data.filter(
        (pasien) => pasien.viaLayanan === "Zoom"
      ).length;

      setVideoCallCount(totalVidioCall);

      setLoading(false);
    });
  }, [userData.id]);

  const cardLaporanMingguan = [
    {
      bgColor: "#A2DEFF",
      iconCard: iconPasien,
      subtitle: "Total Pasien",
      text: loading ? (
        <PulseLoader color="#D5E0DE" size={8} loading={loading} />
      ) : (
        totalPasien.toString()
      ),
    },

    {
      bgColor: "#FFBBBB",
      iconCard: iconClock,
      subtitle: "Jam Praktek",
      text: loading ? (
        <PulseLoader color="#D5E0DE" size={8} loading={loading} />
      ) : (
        "12"
      ),
    },

    {
      bgColor: "#C1FFEF",
      iconCard: iconChat,
      subtitle: "Layanan Chat",
      text: loading ? (
        <PulseLoader color="#D5E0DE" size={8} loading={loading} />
      ) : (
        chatCount.toString()
      ),
    },

    {
      bgColor: "#F0CAFF",
      iconCard: iconZoom,
      subtitle: "Layanan Vidio Call",
      text: loading ? (
        <PulseLoader color="#D5E0DE" size={8} loading={loading} />
      ) : (
        videoCallCount.toString()
      ),
    },
  ];

  return (
    <>
      <Layouts>
        <section className="row">
          <div className="col-lg-12 col-md">
            <div className="wrapper__dashboard bg-white">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-lg-9 col-md">
                  <h4 className="fw-bold text__title mb-4">
                    <p>Selamat Datang, dr. {storedDataLogin}</p>
                  </h4>

                  <p className="text__subtitle fw-normal">
                    Have a nice day at work
                  </p>
                </div>
                <div className="col-3">
                  <img src={dashboardImg} alt="dahsboard-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper__laporan__Mingguan bg-white mt-2">
          <h5 className="fw-bold mb-3">Laporan Mingguan</h5>
          <div className="row row-cols-1 row-cols-lg-5 row-cols-md-2 g-2">
            {cardLaporanMingguan.map((item, index) => (
              <div className="col" key={index}>
                <Card
                  bgColor={item.bgColor}
                  iconCard={item.iconCard}
                  subtitle={item.subtitle}
                  text={item.text}
                />
              </div>
            ))}
          </div>
          {!loading ? (
            dataPasien.length === 0 ? (
              <div className="pasien__kosong d-flex align-items-center justify-content-center flex-column">
                <img src={imgDataPasienKosong} alt="img-pasien-kosong" />
                <p className="fw-semibold">Belum Ada Antrian Pasien</p>
              </div>
            ) : (
              <>
                <TableListPasien data={dataPasien} />
              </>
            )
          ) : (
            <Skeleton height={100} count={1} className="mt-3" />
          )}

          <div className="toogle__chatbot ">
            <Link to={"/dokter/chatbot"}>
              <div className="bg-white px-3 py-3 d-flex align-items-center justify-content-center">
                <img src={iconChatBot} alt="icon-chat-bot" />
              </div>
            </Link>
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default Dashboard;
