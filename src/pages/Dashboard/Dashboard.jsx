import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import { dashboardImg, iconChatBot, imgDataPasienKosong } from "../../../image";
import "./Dashboard.css";
import Card from "../../components/fragments/Card/Card";
import TableListPasien from "../../components/fragments/TableListPasien/TableListPasien";
import {
  cardLaporanMingguan,
  dataPasien,
} from "../../components/DataComponents/dataComponents";
import { Link } from "react-router-dom";
import { getAllCounseling } from "../../service/counseling";

const Dashboard = () => {
  const [dataPasien, setDataPasien] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    getAllCounseling((data) => {
      setDataPasien(data.data);
    });
  }, []);

  return (
    <>
      <Layouts>
        <section className="row">
          <div className="col-lg-12 col-md">
            <div className="wrapper__dashboard bg-white">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-lg-9 col-md">
                  <h4 className="fw-bold text__title mb-4">
                    Selamat Datang, dr Helen
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

          {dataPasien.length === 0 ? (
            <div className="pasien__kosong d-flex align-items-center justify-content-center flex-column">
              <img src={imgDataPasienKosong} alt="img-pasien-kosong" />
              <p className="fw-semibold">Belum Ada Antrian Pasien</p>
            </div>
          ) : (
            <>
              <h5 className="fw-bold mt-3">List Pasien</h5>
              <TableListPasien data={dataPasien} />
            </>
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
