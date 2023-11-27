import React from "react";
import Layouts from "../../components/layouts/Layouts";
import "./PencairanSaldo.css";
import { iconCardTarikSaldo } from "../../../image";

const PencairanSaldo = () => {
  return (
    <Layouts>
      <section className="pencairan__saldo bg-white rounded-2 px-2 py-2">
        <h5 className="fw-semibold ms-3 mt-2">Pencairan Saldo</h5>

        <div className="card card__tarik__saldo bg-white border-0">
          <div className="card-body d-flex flex-row align-items-center">
            <img src={iconCardTarikSaldo} alt="icon-card" />

            <p>Tarik Saldo</p>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default PencairanSaldo;
