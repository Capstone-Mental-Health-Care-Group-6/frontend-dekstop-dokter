import React, { useState, useEffect } from "react";
import Layouts from "../../components/layouts/Layouts";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import BackButton from "../../components/elements/Button/BackButton";
import "./Dokumen.styles.css";
import Input from "../../components/elements/Input/Input";
import ModalProfile from "../../components/fragments/Modal/ModalProfile";
import { useLogin } from "../../hooks/useLogin";
import { DetailDoctor } from "../../service/doctor";

const Dokumen = () => {
  const [files, setFiles] = useState({
    doctor_cv: "",
    doctor_sipp_file: "",
    doctor_ijazah: "",
    doctor_str_file: "",
  });

  const [showProfileModal, setShowProfileModal] = useState(false); 

  const [errorMessages, setErrorMessages] = useState({
    doctor_cv: "",
    doctor_sipp_file: "",
    doctor_ijazah: "",
    doctor_str_file: "",
  });

  const handleFileChange = (event, setFile, setInputValue, inputName) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    setInputValue(selectedFile ? selectedFile.name : "");

    const newErrorMessages = { ...errorMessages, [inputName]: "" };
    setErrorMessages(newErrorMessages);
  };

  const handleSubmitClick = () => {
    const newErrorMessages = {
      doctor_cv: !files.doctor_cv ? "CV file wajib diisi" : "",
      doctor_sipp_file: !files.doctor_sipp_file ? "SIPPK file wajib diisi" : "",
      doctor_ijazah: !files.doctor_ijazah ? "Ijazah file wajib diisi" : "",
      doctor_str_file: !files.doctor_str_file ? "STRPK wajib diisi" : "",
    };
  
    setErrorMessages(newErrorMessages);
  
    if (!doctor_cv || !doctor_sipp_file|| !doctor_ijazah || !doctor_str_file) {
      return;
    }

    setShowProfileModal(true);
  };

  const handleSubmitConfirm = () => {
    setShowProfileModal(false);
  };

  const handleSubmitCancel = () => {
    setShowProfileModal(false);
  };

  return (
    <Layouts>
      <div className="dokumen">
        <div className="container">
          <BackButton location={"/dokter/profile"} />
          <form className="dokumen-form" onSubmit={handleFileChange}>
            <h4 className="dokumen-title">Dokumen</h4>

            <div className="row">
            <div className="ketentuan-container">
              <h4 className="teks-ketentuan">Ketentuan File:</h4>
              <ul className="ketentuan">
                <li>File maksimal berukuran 10 MB</li>
                <li>Dalam format PDF</li>
              </ul>
            </div>
          </div>

          {/* CV Section */}
          <div className="row">
            <Label htmlFor="doctor_cv">Curriculum Vitae (CV)</Label>
            <div className="input-group mb-3">
              <div className="form-control-wrapper">
                <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.doctor_cv ? "is-invalid" : ""}`}
                  id="doctor_cv"
                  name="doctor_cv"
                  defaultValue={files.cv ? files.cv.name : ""}
                  placeholder="CV Dr.Helen.pdf"
                  readOnly
                />
                  {errorMessages.doctor_cv && (
                    <div className="invalid-feedback">{errorMessages.doctor_cv}</div>
                  )}  
                <label className="btn btn-outline-primary mb-2 choose-file-btn">
                  Pilih File
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      handleFileChange(e, setFiles, (value) =>
                        document.getElementById("doctor_cv").value = value
                      )
                    }
                  />               
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <Label htmlFor="doctor_sipp_file">Surat Izin Praktik Psikologi Klinis  (SIPPK)</Label>
            <div className="input-group mb-3">
              <div className="form-control-wrapper">
              <Input
                type="text"
                className={`form-control mb-2 ${errorMessages.doctor_sipp_file ? "is-invalid" : ""}`}                  
                id="doctor_sipp_file"
                name="doctor_sipp_file"
                defaultValue={files.doctor_sipp_file ? files.doctor_sipp_file.name : ""}
                placeholder="Surat Izin Praktek.pdf"
                readOnly
              />
              {errorMessages.doctor_sipp_file && (
                <div className="invalid-feedback">{errorMessages.doctor_sipp_file}</div>
              )}
              <label className="btn btn-outline-primary mb-2 choose-file-btn">
                Pilih File
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    handleFileChange(e,  setFiles, (value) =>
                      document.getElementById("doctor_sipp_file").value = value
                    )
                  }
                />
              </label>
              </div>
            </div>
          </div>

          <div className="row">
            <Label htmlFor="doctor_ijazah">Ijazah Terakhir</Label>
            <div className="input-group mb-3">
              <div className="form-control-wrapper">
              <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.doctor_ijazah ? "is-invalid" : ""}`}                  
                  id="doctor_ijazah"
                  name="doctor_ijazah"
                  defaultValue={files.doctor_ijazah ? files.doctor_ijazah.name : ""}
                  placeholder="Ijazah.pdf"
                  readOnly
                />
                {errorMessages.doctor_ijazah && (
                  <div className="invalid-feedback">{errorMessages.doctor_ijazah}</div>
                )}
                <label className="btn btn-outline-primary mb-2 choose-file-btn">
                  Pilih File
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      handleFileChange(e,  setFiles, (value) =>
                        document.getElementById("doctor_ijazah").value = value
                      )
                    }
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <Label htmlFor="doctor_str_file">Surat Tanda Registrasi Psikologi Klinis (STRPK)</Label>
            <div className="input-group mb-3">
            <div className="form-control-wrapper">
            <Input
                type="text"
                className={`form-control mb-2 ${errorMessages.doctor_str_file ? "is-invalid" : ""}`}                  
                id="doctor_str_file"
                name="doctor_str_file"
                defaultValue={files.doctor_str_file ? files.doctor_str_file.name : ""}
                placeholder="Surat Tanda Registrasi.pdf"
                readOnly
              />
              {errorMessages.doctor_str_file && (
                <div className="invalid-feedback">{errorMessages.doctor_str_file}</div>
              )}
              <label className="btn btn-outline-primary mb-2 choose-file-btn">
                Pilih File
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    handleFileChange(e, setFiles, (value) =>
                      document.getElementById("doctor_str_file").value = value
                    )
                  }
                />
              </label>
            </div>
            </div>
          </div>
        </form>
        <br />
        <div className="button-container d-flex justify-content-center mb-3">
          <Button
            type="button"
            className="btn btn-primary"
            text="Simpan Perubahan"
            onClick={handleSubmitClick}
          />
        </div>
        <ModalProfile
          show={showProfileModal}
          title="Profile"
          onClose={handleSubmitCancel}
          onSubmit={handleSubmitConfirm}
        />
      </div>
      </div>
    </Layouts>
  );
};

export default Dokumen;
