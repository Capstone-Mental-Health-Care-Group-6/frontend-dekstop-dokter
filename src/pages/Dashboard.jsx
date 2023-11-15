import React from "react";
import Layouts from "../components/layouts/Layouts";

const Dashboard = () => {
  return (
    <>
      <Layouts>
        <div className="card my-2">
          <div className="row p-4">
            <div className="col">
              <h1>Selamat Datang, Nama</h1>
              <p>Have a nice day at work</p>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div className="card my-2">
          <div className="col p-4">
            <h4>Laporan Mingguan</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusantium aut, provident adipisci magni soluta
              placeat quae earum ut et cupiditate odit perspiciatis nisi totam
              non qui. Laborum, cupiditate, sed nemo repellendus doloribus
              inventore id enim eveniet perspiciatis quisquam corporis assumenda
              accusantium? Vero incidunt doloribus rerum sit? Commodi, tempore
              amet.
            </p>
            <h4>List Pasien</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusantium aut, provident adipisci magni soluta
              placeat quae earum ut et cupiditate odit perspiciatis nisi totam
              non qui. Laborum, cupiditate, sed nemo repellendus doloribus
              inventore id enim eveniet perspiciatis quisquam corporis assumenda
              accusantium? Vero incidunt doloribus rerum sit? Commodi, tempore
              amet.
            </p>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Dashboard;
