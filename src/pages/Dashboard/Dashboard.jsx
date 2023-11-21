import React from "react";
import Layouts from "../../components/layouts/Layouts";
import { dashboardImg } from "../../../image";
import "./Dashboard.css";
import { cardLaporanMingguan } from "../../components/DataComponents/dataComponents";
import Card from "../../components/fragments/Card/Card";

const Dashboard = () => {
  return (
    <>
      <Layouts>
        <section className="row">
          <div className="col-lg-12 col-md">
            <div className="wrapper__dashboard bg-white">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-9">
                  <h4 className="fw-bold text__title mb-4">
                    selamat datang, dr helen
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
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 ">
            {cardLaporanMingguan.map((item, index) => (
              <div className="col" key={index}>
                <Card
                  rectangle={item.rectangle}
                  iconCard={item.iconCard}
                  subtitle={item.subtitle}
                  text={item.text}
                />
              </div>
            ))}
          </div>

          <h5 className="fw-bold mt-3">List Pasien</h5>
        </section>
      </Layouts>
    </>
  );
};

export default Dashboard;
