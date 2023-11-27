import React, { useEffect, useState } from "react";
import InputSelect from "../../elements/Input/InputSelect";
import Input from "../../elements/Input/Input";

const ModalTarikSaldo = ({ id, show, size, handleClose }) => {
  return (
    <div>
      <div
        className="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered ${size}`}>
          <div className="modal-content">
            <div className="modal-body">
              <div className="">
                <p>Tambah Metode Pembayaran</p>
                <InputSelect
                  name={"metodePembayaran"}
                  id={"metodePembayaran"}
                  title={"Pilih Metode Pembayaran"}
                  options={["BANK BCA", "BANK BRI", "BANK BNI", "BANK MANDIRI"]}
                />
              </div>
              <div className="">
                <p>Nama Penerima</p>
                <Input
                  name={"namaPenerima"}
                  id={"namaPenerima"}
                  placeholder={"Masukan Nama Penerima"}
                />
              </div>

              <div className="">
                <p>Jumlah Saldo</p>
                <h5>Rp. 200.000-,</h5>
              </div>
              <div className="">
                <p>Tambah Nominal Penarikan</p>
                <InputSelect
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTarikSaldo;
