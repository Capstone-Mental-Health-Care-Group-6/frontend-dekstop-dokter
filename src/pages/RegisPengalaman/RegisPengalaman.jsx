import React, { useState, useEffect } from "react";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import "./RegisPengalaman.styles.css";
import BackButton from "../../components/elements/Button/BackButton";
import { NavLink } from "react-router-dom";
import { createProfileDoctor, getAllDoctors } from "../../service/doctor";

const RegisPengalaman = () => {
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

  const [errorMessages, setErrorMessages] = useState({
    doctor_company: "",
    doctor_title: "",
    doctor_start_date: "",
    doctor_end_date: "",
    doctor_company_address: "",
  });
  
  const handleCreateProfile = async (e) => {
    e.preventDefault();

    const newErrorMessages = formData.map((data, index) => ({
      doctor_company: !data.doctor_company ? `Nama Perusahaan wajib diisi (${index + 1})` : "",
      doctor_title: !data.doctor_title ? `Jabatan wajib diisi (${index + 1})` : "",
      doctor_start_date: !data.doctor_start_date ? `Awal Bekerja wajib diisi (${index + 1})` : "",
      doctor_end_date: !data.doctor_end_date ? `Akhir Bekerja wajib diisi (${index + 1})` : "",
      doctor_company_address: !data.doctor_company_address ? `Alamat Perusahaan wajib diisi (${index + 1})` : "",
    }));
  
    setErrorMessages(newErrorMessages.reduce((acc, curr) => ({ ...acc, ...curr }), {}));
  
    if (newErrorMessages.some((error) => Object.values(error).some((value) => value !== ""))) {
      return;
    }
    
    const apiData = new FormData();
    formData.forEach((data, index) => {
      Object.entries(data).forEach(([key, value]) => {
        apiData.append(`${key}_${index}`, value);
      });
    });

    await createProfileDoctor(apiData, (status, res) => {
      if (status) {
        console.log(res);
        getAllDoctors((res) => {
          setFormData(res.data);
        });
      } else {
        setErrorMessages({ ...errorMessages, someKey: 'd-block' });
      }
    });

    // window.location.href = "/dokter/regis/profil-singkat";

  };  

  return (
      <div className="regis-pengalaman">
        <div className="container justify-content-center">
          <BackButton location={"/dokter/regis/dokumen"} />
          <div className="step-regis">
            <h4>4 / 5</h4>
          </div> 
          {formData.map((data, index) => (
            <form className="pengalaman-form" key={index}>
              <h4 className="pengalaman-title">Pengalaman Kerja</h4>
              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`doctor_company${index}`}>Nama Perusahaan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_company ? "is-invalid" : ""}`}
                    id={`doctor_company${index}`}
                    name="doctor_company"
                    placeholder="Nama Perusahaan"
                    value={data.doctor_company}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_company && (
                    <div className="invalid-feedback">{errorMessages.doctor_company}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`doctor_title${index}`}>Jabatan di Perusahaan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_title ? "is-invalid" : ""}`}
                    id={`doctor_title${index}`}
                    name="doctor_title"
                    placeholder="Jabatan"
                    value={data.doctor_title}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_title && (
                    <div className="invalid-feedback">{errorMessages.doctor_title}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`doctor_start_date${index}`}>Awal Bekerja</Label>
                  <Input
                    type="date"
                    className={`form-control mb-2 ${errorMessages.doctor_start_date ? "is-invalid" : ""}`}
                    id={`doctor_start_date${index}`}
                    name="doctor_start_date"
                    placeholder="Tahun Masuk"
                    value={data.doctor_start_date}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_start_date && (
                    <div className="invalid-feedback">{errorMessages.doctor_start_date}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`doctor_end_date${index}`}>Akhir Bekerja</Label>
                  <Input
                    type="date"
                    className={`form-control mb-2 ${errorMessages.doctor_end_date ? "is-invalid" : ""}`}
                    id={`doctor_end_date${index}`}
                    name="doctor_end_date"
                    placeholder="Tahun Keluar"
                    value={data.doctor_end_date}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_end_date && (
                    <div className="invalid-feedback">{errorMessages.doctor_end_date}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="input-alamat-perusahaan">
                  <Label htmlFor={`doctor_company_address${index}`}>Alamat Perusahaan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_company_address ? "is-invalid" : ""}`}
                    id={`doctor_company_address${index}`}
                    name="doctor_company_address"
                    placeholder="Alamat"
                    value={data.doctor_company_address}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_company_address && (
                    <div className="invalid-feedback">{errorMessages.doctor_company_address}</div>
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
              Dengan ini saya menyetujui <NavLink to={'/dokter/pengalaman/privacy-policy'} className="privacyPolicy">Kebijakan Privasi</NavLink> dari EmpathiCare
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

          <div className="button-container d-flex justify-content-center">
            {/* Save Changes Button */}
            <Button
              type="button"
              className="btn btn-primary"
              text="Selanjutnya"
              onClick={handleCreateProfile}
            />
          </div>
        </div>
      </div>
  );
};

export default RegisPengalaman;