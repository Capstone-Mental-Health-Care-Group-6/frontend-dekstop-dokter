import React, { useEffect, useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import Button from "../../components/elements/Button/Button";
import "./Artikel.style.css";
import { FaPlus } from "react-icons/fa6";
import { dataArtikel } from "./dataArtikel";
import { artikelEmpty } from "../../../image";
import { NavLink } from "react-router-dom";

const Artikel = () => {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    setArtikel(dataArtikel);
  }, []);

  return (
    <Layouts>
      <h2 className="py-3 fw-bold">Daftar Artikel</h2>
      <div className="container bg-light rounded-2 py-3">
        <div className="d-flex align-items-center justify-content-between px-4 fw-semibold ">
          <div className=" d-flex align-items-center">
            <p className="m-0 data-artikel-text">Data Artikel</p>
          </div>
          <div>
            <NavLink to={"/dokter-tambah-artikel"}>
            <Button
              type={"button"}
              id={"create-artikel-btn"}
              text={"Tambah Artikel"}
              className={
                "button-create border-primary bg-light py-2 px-3 rounded-2 border-1 fw-bold"
              }
              svg={<FaPlus />}
              svgClassName={"d-flex flex-row align-items-center svg-button-create"}
              />
              </NavLink>
          </div>
        </div>
        <hr />
        {artikel.length > 0 ? (
          <div>
            <p>yesh girl</p>
          </div>
        ) : (
          <div className="h-100 d-flex flex-column justify-content-center align-items-center ">
            <img src={artikelEmpty} alt="artikel Empty Image" />
            <p className="my-3 fw-bold w-50 justify-content-center">
              Bagikan pengetahuan Anda untuk membantu orang lain melewati masa
              sulit.
            </p>
          </div>
        )}
      </div>
    </Layouts>
  );
};

export default Artikel;
