import React, { useState, useEffect } from "react";
import Layouts from "../../components/layouts/Layouts";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import "./Pengalaman.styles.css";
import BackButton from "../../components/elements/Button/BackButton";
import ModalProfile from "../../components/fragments/Modal/ModalProfile";
import { NavLink } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { DetailDoctor } from "../../service/doctor";

const Pengalaman = () => {
  useLogin();
  const [formData, setFormData] = useState([
    {
      doctor_company: "",
      doctor_title: "",
      doctor_start_date: "",
      doctor_end_date: "",
      doctor_company_address: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
  
    if (name === 'awalBekerja') {
      const isNumeric = /^\d+$/.test(value);
  
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: isNumeric ? '' : `${name === 'awalBekerja' ? 'Awal Bekerja' : 'Awal Bekerja'} harus berupa angka`,
      }));
    }
  
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  const handleAddData = () => {
    if (formData.length < 5) {
      setFormData([
        ...formData,
        {
          doctor_company: "",
          doctor_title: "",
          doctor_start_date: "",
          doctor_end_date: "",
          doctor_company_address: "",
        },
      ]);
    }
  };

  const [showProfileModal, setShowProfileModal] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    doctor_company: "",
    doctor_title: "",
    doctor_start_date: "",
    doctor_end_date: "",
    doctor_company_address: "",
  });

  const handleSubmitClick = () => {
    const newErrorMessages = formData.map((data, index) => ({
      doctor_company: !data.doctor_company ? `Nama Perusahaan wajib diisi (${index + 1})` : "",
      doctor_title: !data.doctor_title ? `Jabatan wajib diisi (${index + 1})` : "",
      doctor_start_date: !data.doctor_start_date ? `Awal Bekerja wajib diisi (${index + 1})` : "",
      doctor_end_date: !data.doctor_end_date ? `Akhir Bekerja wajib diisi (${index + 1})` : "",
      doctor_company_address: !data.doctor_company_address ? `Alamat Perusahaan wajib diisi (${index + 1})` : "",
    }));

    setErrorMessages(
      newErrorMessages.reduce((acc, curr) => ({ ...acc, ...curr }), {})
    );

    if (
      newErrorMessages.some((error) =>
        Object.values(error).some((value) => value !== "")
      )
    ) {
      return;
    }

    setShowProfileModal(true);
  };

  const handleSubmitConfirm = () => {
    console.log("Data yang akan dikirim:", formData);
  };

  const handleSubmitCancel = () => {
    setShowProfileModal(false);
  };

  return (
    <Layouts>
      <div className="pengalaman">
        <div className="container justify-content-center">
          <BackButton location={"/dokter/profile"} />
          {formData.map((data, index) => (
            <form className="pengalaman-form" key={index}>
              <h4 className="pengalaman-title">Pengalaman Kerja</h4>
              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`namaPerusahaan${index}`}>Nama Perusahaan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.namaPerusahaan ? "is-invalid" : ""}`}
                    id={`namaPerusahaan${index}`}
                    name="namaPerusahaan"
                    placeholder="Nama Perusahaan"
                    value={data.doctor_company}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.namaPerusahaan && (
                    <div className="invalid-feedback">{errorMessages.namaPerusahaan}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`jabatan${index}`}>Jabatan di Perusahaan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.jabatan ? "is-invalid" : ""}`}
                    id={`jabatan${index}`}
                    name="jabatan"
                    placeholder="Jabatan"
                    value={data.doctor_title}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.jabatan && (
                    <div className="invalid-feedback">{errorMessages.jabatan}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`doctor_start_date${index}`}>Awal Bekerja</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.awalBekerja ? "is-invalid" : ""}`}
                    id={`awalBekerja${index}`}
                    name="awalBekerja"
                    placeholder="Tahun Masuk"
                    value={data.doctor_start_date}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.awalBekerja && (
                    <div className="invalid-feedback">{errorMessages.awalBekerja}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`doctor_end_date${index}`}>Akhir Bekerja</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.akhirBekerja ? "is-invalid" : ""}`}
                    id={`akhirBekerja${index}`}
                    name="akhirBekerja"
                    placeholder="Tahun Keluar"
                    value={data.doctor_end_date}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.akhirBekerja && (
                    <div className="invalid-feedback">{errorMessages.akhirBekerja}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="input-alamat-perusahaan">
                  <Label htmlFor={`alamatPerusahaan${index}`}>Alamat Perusahaan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.alamatPerusahaan ? "is-invalid" : ""}`}
                    id={`alamatPerusahaan${index}`}
                    name="alamatPerusahaan"
                    placeholder="Alamat"
                    value={data.doctor_company_address}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.alamatPerusahaan && (
                    <div className="invalid-feedback">{errorMessages.alamatPerusahaan}</div>
                  )}
                </div>
              </div>
            </form>
          ))}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Dengan ini saya menyetujui{" "}
              <NavLink
                to={"/dokter/pengalaman/privacy-policy"}
                className="privacyPolicy"
              >
                Kebijakan Privasi
              </NavLink>{" "}
              dari EmpathiCare
            </label>
          </div>

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
            {/* Save Changes Button */}
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

export default Pengalaman;
