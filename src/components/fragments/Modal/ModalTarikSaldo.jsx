import React, { useEffect, useState } from "react";
import InputSelect from "../../elements/Input/InputSelect";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import ModalAlertSaldo from "../ModalAlert/ModalAlertSaldo";
import { imgModalSaldoCair } from "../../../../image";
import { withdraw } from "../../../service/transaction";

const ModalTarikSaldo = ({ id, size, storedSaldo }) => {
  const [formData, setFormData] = useState({
    metodePembayaran: "",
    namaPenerima: "",
    nomorRekening: "",
    nominalPenarikan: "",
  });

  const [showAlert, setShowAlert] = useState(true);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { metodePembayaran, namaPenerima, nomorRekening, nominalPenarikan } =
      formData;

    const bank = metodePembayaran.replace("BANK ", "");
    let balanceReq = nominalPenarikan
      .replace("Rp ", "")
      .replace(".", "")
      .replace("-,", "");
    balanceReq = parseInt(balanceReq, 10);
    const withdrawData = {
      balance_req: balanceReq,
      payment_method: bank,
      payment_name: namaPenerima,
      payment_number: nomorRekening,
    };

    withdraw(withdrawData)
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
              <form onSubmit={handleSubmit}>
                <div className="mb-3 px-3">
                  <InputSelect
                    className={
                      "select__metode__pembayaran border-2 border-primary text-primary fw-semibold rounded-3"
                    }
                    name={"metodePembayaran"}
                    id={"metodePembayaran"}
                    title={"Pilih Metode Pencairan"}
                    onChange={handleChange}
                    options={[
                      { value: "BCA", label: "BANK BCA" },
                      { value: "BRI", label: "BANK BRI" },
                      { value: "BNI", label: "BANK BNI" },
                      { value: "MANDIRI", label: "BANK MANDIRI" },
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
                    onChange={handleChange}
                    placeholder={"Masukan Nama Penerima"}
                  />
                </div>

                <div className="nomor__rekening mb-3 px-3">
                  <p className="fw-semibold text-black">Nomor Rekening</p>
                  <Input
                    className={
                      "fw-semibold border border-secondary px-3 rounded-3"
                    }
                    name={"nomorRekening"}
                    id={"nomorRekening"}
                    onChange={handleChange}
                    placeholder={"Masukan Nomor Rekening"}
                  />
                </div>
                <div className="jumlah__Saldo rounded-3 py-4 px-4 mb-3">
                  <p className="d-flex flex-column fw-semibold text-white">
                    Jumlah Saldo{" "}
                    <span className="fw-bold mt-2">Rp {storedSaldo}</span>
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
                    onChange={handleChange}
                    options={[
                      { value: "50000", label: "Rp 50.000-," },
                      { value: "75000", label: "Rp 75.000-," },
                      { value: "100000", label: "Rp 100.000-," },
                      { value: "150000", label: "Rp 150.000-," },
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
                    type="submit"
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
