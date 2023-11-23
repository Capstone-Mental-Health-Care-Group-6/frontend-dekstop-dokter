import React, { useState } from "react";
import { dataPasien } from "../../DataComponents/dataComponents";
import {
  iconAlertTerimaPasien,
  iconAlertTolakPasien,
  profilDetailPasien,
} from "../../../../image";
import Button from "../../elements/Button/Button";
import ModalAlert from "../ModalAlert/ModalAlert";

const ModalDetailPasien = ({ id, size, selectedPasienId }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [modalTextArea, setModalTextArea] = useState("d-none");

  const selectedPasien = dataPasien.find(
    (pasien) => pasien.id === selectedPasienId
  );

  const handleButtonClick = (id) => {
    setSelectedButton(id);
    if (id === 4) {
      setModalTextArea("d-block");
    } else {
      setModalTextArea("d-none");
    }
  };

  return (
    <>
      <ModalAlert
        id={"modal-tolak-pasien"}
        size={"modal-lg"}
        iconAlert={iconAlertTolakPasien}
      >
        <div className="modal-body ">
          <div className="d-flex flex-column align-items-center">
            <div className=" text-center">
              <p className="fw-bold ">
                Apakah kamu yakin ingin menolak pasien ? <br /> beri alasan yang
                akan diberikan ke pasien
              </p>
            </div>
          </div>

          <div className="row row-cols-lg-2 row-cols-1 g-2">
            <div className="col-12 col-md-8 col-lg-8">
              <Button
                className={`w-100 ${
                  selectedButton === 1
                    ? "changeColorButton fw-medium"
                    : "btn border-secondary-subtle text-black fw-medium"
                }`}
                text={"Overbooking"}
                onClick={() => handleButtonClick(1)}
              />
            </div>
            <div className="col-md-4 col-lg-4 col-12 ">
              <Button
                className={`w-100 ${
                  selectedButton === 2
                    ? "changeColorButton  fw-medium"
                    : "btn  border-secondary-subtle text-black fw-medium"
                }`}
                text={"Keterbatasan Waktu"}
                onClick={() => handleButtonClick(2)}
              />
            </div>
            <div className="col-12 col-md-9 col-lg-9">
              <Button
                className={`w-100 ${
                  selectedButton === 3
                    ? "changeColorButton  fw-medium"
                    : "btn border-secondary-subtle text-black fw-medium"
                }`}
                text={"Dokter Ada Kegiatan Mendadak"}
                onClick={() => handleButtonClick(3)}
              />
            </div>
            <div className="col-md-3 col-lg-3 col-12 ">
              <Button
                className={`w-100 ${
                  selectedButton === 4
                    ? "changeColorButton  fw-medium"
                    : "btn  border-secondary-subtle text-black fw-medium"
                }`}
                text={"Alasan Lain"}
                onClick={() => handleButtonClick(4)}
              />
            </div>
          </div>

          <div className={`form-floating mt-3 ${modalTextArea}`}>
            <h5 className="text-black fw-semibold">
              Tuliskan alasan Penolakan
            </h5>
            <textarea
              style={{ minHeight: "20vh" }}
              className="form-control w-100"
              id="floatingTextarea2"
            />
          </div>

          <div className="text-center mt-3">
            <Button
              text={"Tolak"}
              className={"btn w-50 text-white text-center py-2 fw-semibold"}
            />
          </div>
        </div>
      </ModalAlert>

      <ModalAlert
        id={"modal-terima-pasien"}
        size={"modal-lg"}
        iconAlert={iconAlertTerimaPasien}
      >
        <div className="modal-body d-flex justify-content-between flex-column gap-5 mt-5">
          <div className="d-flex flex-column align-items-center">
            <p className="text-center text-black">
              Kami percaya Anda akan memberikan layanan yang luar biasa. Silakan
              berikan perawatan terbaik, dengan perhatian dan keahlian Anda.
            </p>
          </div>
          <div className="text-center">
            <Button
              text={"Oke"}
              className={
                "btn btn-success w-50 text-white text-center py-2 fw-semibold"
              }
            />
          </div>
        </div>
      </ModalAlert>

      <div
        className="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered  ${size}`}>
          <div className="modal-content">
            <div className="modal-body">
              {selectedPasien && (
                <div className="d-flex justify-content-center ">
                  <img src={profilDetailPasien} alt="profil-img-pasien" />

                  <div className="ms-4">
                    <p className="d-flex flex-column">
                      Nama{" "}
                      <span className="fw-semibold">{selectedPasien.nama}</span>
                    </p>
                    <p className="d-flex flex-column ">
                      Jenis Kelamin{" "}
                      <span className="fw-semibold">
                        {selectedPasien.jenisKelamin}
                      </span>
                    </p>
                    <p className="d-flex flex-column ">
                      Keluhan{" "}
                      <span className="fw-semibold">
                        {selectedPasien.keluhan}
                      </span>
                    </p>
                    <p className="d-flex flex-column ">
                      Via Konsul{" "}
                      <span className="fw-semibold">
                        {selectedPasien.viaLayanan}
                      </span>
                    </p>
                    <div className="mt-5 d-flex flex-row gap-3">
                      <Button
                        text={"Terima"}
                        className={
                          "btn btn-primary rounded-4 py-2 px-4 fw-semibold"
                        }
                        bsTogle={"modal"}
                        bsTarget={"#modal-terima-pasien"}
                      />
                      <Button
                        text={"Tolak"}
                        className={
                          "btn btn-primary rounded-4 py-2 px-4 fw-semibold"
                        }
                        bsTogle={"modal"}
                        bsTarget={"#modal-tolak-pasien"}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetailPasien;
