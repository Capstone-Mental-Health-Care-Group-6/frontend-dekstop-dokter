import React, { useState, useEffect } from "react";
import Layouts from "../../components/layouts/Layouts";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import ModalProfile from "../../components/fragments/Modal/ModalProfile";
import BackButton from "../../components/elements/Button/BackButton";
import "./DataAkademik.styles.css";
import { useLogin } from "../../hooks/useLogin";

const DataAkademik = () => {
  useLogin();
  const [formData, setFormData] = useState({
    doctor_university: "",
    doctor_study_program: "",
    doctor_enroll_year: "",
    doctor_graduate_year: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'doctor_enroll_year' || name === 'doctor_graduate_year') {
      const isNumeric = /^\d+$/.test(value);

      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: isNumeric ? '' : `Tahun ${name === 'doctor_enroll_year' ? 'Masuk' : 'Tamat'} harus berupa angka`,
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddData = () => {
    // Set opsi untuk menutup modal profil jika dibuka
    setShowProfileModal(false);

    if (formData.length < 5) {
      setFormData({
        ...formData,
        doctor_university: "",
        doctor_study_program: "",
        doctor_enroll_year: "",
        doctor_graduate_year: "",
      });
    }
  };

  const [showProfileModal, setShowProfileModal] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    doctor_university: "",
    doctor_study_program: "",
    doctor_enroll_year: "",
    doctor_graduate_year: "",
  });

  const handleSubmitClick = () => {
    const newErrorMessages = {
      doctor_university: !formData.doctor_university ? "Asal Universitas wajib diisi" : "",
      doctor_study_program: !formData.doctor_study_program ? "Jenjang Pendidikan wajib diisi" : "",
      doctor_enroll_year: !formData.doctor_enroll_year ? "Tahun Masuk wajib diisi" : "",
      doctor_graduate_year: !formData.doctor_graduate_year ? "Tahun Tamat wajib diisi" : "",
    };

    setErrorMessages(newErrorMessages);

    if (Object.values(newErrorMessages).some((value) => value !== "")) {
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

  useEffect(() => {
    const hardcodedData = {
      doctor_university: "Universitas Indonesia",
      doctor_study_program: "S1 Psikolog",
      doctor_enroll_year: "2005-01-01",
      doctor_graduate_year: "2009-01-01",
    };

    console.log("Hardcoded Data:", hardcodedData);

    setFormData(hardcodedData);
  }, []);

  return (
    <Layouts>
      <div className="data-akademik">
        <div className="container">
          <BackButton location={"/dokter/profile"} />

          <form className="data-akademik-form">
            <h4 className="data-akademik-title">Data Akademik</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <Label htmlFor="doctor_university">Asal Universitas</Label>
                <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.doctor_university ? "is-invalid" : ""}`}
                  id="doctor_university"
                  name="doctor_university"
                  placeholder="Universitas"
                  value={formData.doctor_university}
                  onChange={handleInputChange}
                />
                {errorMessages.doctor_university && (
                  <div className="invalid-feedback">{errorMessages.doctor_university}</div>
                )}
              </div>

              <div className="col-md-6">
                <Label htmlFor="doctor_study_program">Jenjang Pendidikan</Label>
                <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.doctor_study_program ? "is-invalid" : ""}`}
                  id="doctor_study_program"
                  name="doctor_study_program"
                  placeholder="Jenjang"
                  value={formData.doctor_study_program}
                  onChange={handleInputChange}
                />
                {errorMessages.doctor_study_program && (
                  <div className="invalid-feedback">{errorMessages.doctor_study_program}</div>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <Label htmlFor="doctor_enroll_year">Tahun Masuk Universitas</Label>
                <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.doctor_enroll_year ? "is-invalid" : ""}`}
                  id="doctor_enroll_year"
                  name="doctor_enroll_year"
                  placeholder="Tahun Masuk"
                  value={formData.doctor_enroll_year}
                  onChange={handleInputChange}
                />
                {errorMessages.doctor_enroll_year && (
                  <div className="invalid-feedback">{errorMessages.doctor_enroll_year}</div>
                )}
              </div>

              <div className="col-md-6">
                <Label htmlFor="doctor_graduate_year">Tahun Tamat Universitas</Label>
                <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.doctor_graduate_year ? "is-invalid" : ""}`}
                  id="doctor_graduate_year"
                  name="doctor_graduate_year"
                  placeholder="Tahun Tamat"
                  value={formData.doctor_graduate_year}
                  onChange={handleInputChange}
                />
                {errorMessages.doctor_graduate_year && (
                  <div className="invalid-feedback">{errorMessages.doctor_graduate_year}</div>
                )}
              </div>
            </div>
            <br />
          </form>

          <div className="buttons-container d-flex justify-content-end mb-3">
            {/* Add Data Button */}
            <Button
              type="button"
              className="btn btn-outline-primary"
              text="+ Tambah Data"
              onClick={handleAddData}
            />
          </div>

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

export default DataAkademik;
