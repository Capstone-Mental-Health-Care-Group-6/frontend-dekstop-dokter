import React, { useEffect, useState } from "react";
import InputSelect from "../../elements/Input/InputSelect";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import ModalAlertSaldo from "../ModalAlert/ModalAlertSaldo";
import { imgModalSaldoCair } from "../../../../image";

const ModalTarikSaldo = ({ id, size }) => {
  return (
    <div>
      <ModalAlertSaldo size={"modal-md"} id={"modal-alert-saldo-diproses"}>
        <div className="modal-body p-5 d-flex flex-column  align-items-center justify-content-center ">
          <img src={imgModalSaldoCair} alt="img-alert" />
          <p className="d-flex flex-column text-center fw-semibold mt-4">
            selamat{" "}
            <span className="fw-bold text-black">
              Pencairan Dana Telah Diproses
            </span>
          </p>
        </div>
      </ModalAlertSaldo>

      <div
        className="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered ${size}`}>
          <div className="modal-content rounded-4 ">
            <div className="modal-body p-5 d-flex flex-column ">
              <h5 className="fw-bold mb-4 px-3">Pencairan Saldo</h5>
              <form action="#">
                <div className="mb-3 px-3">
                  <InputSelect
                    className={
                      "select__metode__pembayaran border-2 border-primary text-primary fw-semibold rounded-3"
                    }
                    name={"metodePembayaran"}
                    id={"metodePembayaran"}
                    title={"Pilih Metode Pembayaran"}
                    options={[
                      "BANK BCA",
                      "BANK BRI",
                      "BANK BNI",
                      "BANK MANDIRI",
                    ]}
                  />
                </div>
                <div className="nama__penerima mb-3 px-3">
                  <p className="fw-semibold text-black">Nama Penerima</p>
                  <Input
                    className={
                      "fw-semibold border border-secondary px-3 rounded-3"
                    }
                    name={"namaPenerima"}
                    id={"namaPenerima"}
                    placeholder={"Masukan Nama Penerima"}
                  />
                </div>

                <div className="nomor__rekening mb-3 px-3">
                  <p className="fw-semibold text-black">Nomor Rekening</p>
                  <Input
                    className={
                      "fw-semibold border border-secondary px-3 rounded-3"
                    }
                    name={"namaPenerima"}
                    id={"namaPenerima"}
                    placeholder={"Masukan Nomor Rekening"}
                  />
                </div>
                <div className="jumlah__Saldo rounded-3 py-4 px-4 mb-3">
                  <p className="d-flex flex-column fw-semibold text-white">
                    Jumlah Saldo{" "}
                    <span className="fw-bold mt-2">Rp 200.000-,</span>
                  </p>
                </div>
                <div className="px-3 mb-5">
                  <InputSelect
                    className={
                      "select__metode__pembayaran border-2 border-primary text-primary fw-semibold rounded-3"
                    }
                    name={"nominalPenarikan"}
                    id={"nominalPenarikan"}
                    title={"Pilih Nominal Penarikan"}
                    options={[
                      "Rp 50.000-,",
                      "Rp 75.000-,",
                      "Rp 100.000-,",
                      "Rp 150.000-,",
                    ]}
                  />
                </div>

                <div className="text-center px-3">
                  <Button
                    text={"Cairkan Dana"}
                    className={
                      "btn__cairkan__dana btn btn-primary text-white w-100 fw-semibold rounded-3"
                    }
                    bsTogle={"modal"}
                    bsTarget={"#modal-alert-saldo-diproses"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTarikSaldo;
