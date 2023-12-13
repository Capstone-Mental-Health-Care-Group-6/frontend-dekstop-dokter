import React, { useState, useEffect } from "react";
import { gambar } from "../../../image"; 
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import InputSelect from "../../components/elements/Input/InputSelect";
import Button from "../../components/elements/Button/Button";
import "./RegisDataPribadi.styles.css"
import { createProfileDoctor, getAllDoctors } from "../../service/doctor";

const RegisDataPribadi = () => {
  const [formData, setFormData] = useState({
    doctor_name: "",
    email: "",
    doctor_nik: "",
    doctor_numberphone: "",
    doctor_dob: "",
    doctor_provinsi: "",
    doctor_gender: "",
    doctor_kota: "",
    doctor_str: "",
    doctor_sipp: "",
    doctor_avatar: null, 
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [errorMessages, setErrorMessages] = useState({
    doctor_name: "",
    email: "",
    doctor_nik: "",
    doctor_numberphone: "",
    doctor_dob: "",
    doctor_provinsi: "",
    doctor_gender: "",
    doctor_kota: "",
    doctor_str: "",
    doctor_sipp: "",
    doctor_avatar: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'doctor_nik' || name === 'doctor_numberphone' || name === 'doctor_str') {
      const isNumeric = /^\d+$/.test(value);
      
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: isNumeric ? '' : `${name === 'doctor_nik' ? 'NIK' : name === 'doctor_numberphone' ? 'Nomor handphone' : 'Nomor STR'} harus berupa angka`,
      }));
    }

    if (name === 'doctor_name' || name === 'doctor_provinsi' || name === 'doctor_kota') {
      const isAlphabetic = /^[A-Za-z ]+$/.test(value);
      
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: isAlphabetic ? '' : `${name === 'doctor_name' ? 'Nama Lengkap' : name === 'doctor_provinsi' ? 'Provinsi' : 'Kota/Kabupaten'} hanya boleh berisi huruf dan spasi`,
      }));
    }

    if (name === 'email') {
      const isValidEmail = emailRegex.test(value);
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: isValidEmail ? '' : 'Email tidak valid',
      }));
    }

    console.log(`Name: ${name}, Value: ${value}`);

    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, doctor_avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };


  const openFileInput = () => {
    document.getElementById("imageInput").click();
  };

  const handleCreateProfile = async (event) => {
    event.preventDefault();

    const newErrorMessages = {
      doctor_name: !formData.doctor_name ? "Nama lengkap wajib diisi" : "",
      email: !formData.email ? "Email wajib diisi" : "",
      doctor_nik: !formData.doctor_nik ? "NIK wajib diisi" : "",
      doctor_numberphone: !formData.doctor_numberphone
        ? "Nomor handphone wajib diisi"
        : "",
      doctor_dob: !formData.doctor_dob ? "Tanggal lahir wajib diisi" : "",
      doctor_provinsi: !formData.doctor_provinsi ? "Provinsi wajib diisi" : "",
      doctor_gender: !formData.doctor_gender
        ? "Jenis kelamin wajib dipilih"
        : "",
      doctor_kota: !formData.doctor_kota ? "Kota/Kabupaten wajib diisi" : "",
      doctor_str: !formData.doctor_str ? "Nomor STR wajib diisi" : "",
      doctor_sipp: !formData.doctor_sipp ? "Nomor SIP wajib diisi" : "",
      doctor_avatar: !formData.doctor_avatar ? "" : "",
    };

    setErrorMessages(newErrorMessages);

    if (
      Object.values(newErrorMessages).some((error) => error !== "") ||
      Object.values(formData).some((value) => value === "")
    ) {
      return;
    }

    const formDataKeys = ['doctor_avatar', 'doctor_name', 'doctor_nik', 'doctor_numberphone', 'doctor_dob', 'doctor_provinsi', 'doctor_gender', 'doctor_kota', 'doctor_str', 'doctor_sipp', 'email'];
    const apiData = new FormData();
    formDataKeys.forEach((key) => {
        if (key !== 'email' && formData.hasOwnProperty(key)) {
            apiData.append(key, formData[key]);
        }
    });

    await createProfileDoctor(apiData, (status, res) => {
      if (status) {
        console.log(res);
        getAllDoctors((res) => {
          setFormData(res.data)
        })
      } else {
        setErrorMessages('d-block')
      }
    })

    // window.location.href = "/dokter/regis/data-akademik";
  };

  return (
    <div className="regis-data-pribadi">
      <div className="container">
        <div className="step-regis">
          <h4>1 / 5</h4>
        </div> 
        <div className="card mb-3">
          <label htmlFor="imageInput">
            <div className="card-body" onClick={openFileInput}>
              <div className="row mb-3">
                <div className="col-md-4">
                {formData.doctor_avatar ? (
                    <img src={formData.doctor_avatar} className="img-fluid" alt="Profile" />
                  ) : (
                    <img src={gambar} className="img-fluid" alt="Default" />
                  )}
                </div>
                <div className="col-md-8">
                  <h5 className="card-title-profile">Upload Your Profile</h5>
                </div>
              </div>
            </div>
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          </div>
            <form className="data-pribadi-form">
            <h4 className="data-pribadi-title">Data Pribadi</h4>
            <div className="row mb-3">
            <div className="col-md-6">
              <Label htmlFor="doctor_name">Nama Lengkap</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_name ? "is-invalid" : ""}`}                  
                    id="doctor_name"
                    name="doctor_name"
                    placeholder="Nama Lengkap"
                    value={formData.doctor_name}
                    onChange={handleInputChange}
                  />
                  {errorMessages.doctor_name && (
                    <div className="invalid-feedback">{errorMessages.doctor_name}</div>
                  )} 
              </div>

              <div className="col-md-6">
                <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    className={`form-control mb-2 ${errorMessages.email ? "is-invalid" : ""}`}                  
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errorMessages.email && (
                    <div className="invalid-feedback">{errorMessages.email}</div>
                  )} 
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <Label htmlFor="doctor_nik">NIK</Label>
                <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.doctor_nik ? "is-invalid" : ""}`}                  
                  id="doctor_nik"
                  name="doctor_nik"
                  placeholder="Nomor Induk Kependudukan"
                  value={formData.doctor_nik}
                  onChange={handleInputChange}
                />
                {errorMessages.doctor_nik && (
                  <div className="invalid-feedback">{errorMessages.doctor_nik}</div>
                )} 
              </div>

              <div className="col-md-6">
                <Label htmlFor="doctor_numberphone">No Handphone</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_numberphone ? "is-invalid" : ""}`}                  
                    id="doctor_numberphone"
                    name="doctor_numberphone"
                    placeholder="Nomor Ponsel"
                    value={formData.doctor_numberphone}
                    onChange={handleInputChange}
                  />
                  {errorMessages.doctor_numberphone && (
                    <div className="invalid-feedback">{errorMessages.doctor_numberphone}</div>
                  )} 
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor="doctor_dob">Tanggal Lahir</Label>
                  <Input
                    type="date"
                    className={`form-control mb-2 ${errorMessages.doctor_dob ? "is-invalid" : ""}`}                  
                    id="doctor_dob"
                    name="doctor_dob"
                    value={formData.doctor_dob}
                    onChange={handleInputChange}
                  />
                  {errorMessages.doctor_dob && (
                    <div className="invalid-feedback">{errorMessages.doctor_dob}</div>
                  )} 
                </div>

                <div className="col-md-6">
                  <Label htmlFor="doctor_provinsi">Provinsi</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_provinsi ? "is-invalid" : ""}`}                  
                    id="doctor_provinsi"
                    name="doctor_provinsi"
                    placeholder="Masukkan Provinsi"
                    value={formData.doctor_provinsi}
                    onChange={handleInputChange}
                  />
                  {errorMessages.doctor_provinsi && (
                    <div className="invalid-feedback">{errorMessages.doctor_provinsi}</div>
                  )} 
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor="doctor_gender">Jenis Kelamin</Label>
                  <InputSelect
                    className={`form-select ${errorMessages.doctor_gender ? "is-invalid" : ""}`}
                    id="doctor_gender"
                    name="doctor_gender"
                    title="Jenis Kelamin"
                    options={[
                      { value: "Laki-laki", label: "Laki-laki" },
                      { value: "Perempuan", label: "Perempuan" },
                    ]}
                    value={formData.doctor_gender}
                    onChange={handleInputChange}
                  />
                  {errorMessages.doctor_gender && (
                    <div className="invalid-feedback">{errorMessages.doctor_gender}</div>
                  )} 
                </div>

                <div className="col-md-6">
                  <Label htmlFor="doctor_kota">Kota/Kabupaten</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_kota ? "is-invalid" : ""}`}                  
                    id="doctor_kota"
                    name="doctor_kota"
                    placeholder="Kota/Kabupaten"
                    value={formData.doctor_kota}
                    onChange={handleInputChange}
                  />
                  {errorMessages.doctor_kota && (
                    <div className="invalid-feedback">{errorMessages.doctor_kota}</div>
                  )} 
                </div>
              </div>

              <div className="row mb-3">
              <div className="col-md-6">
                <Label htmlFor="doctor_str">Nomor STR</Label>
                <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.doctor_str ? "is-invalid" : ""}`}                  
                  id="doctor_str"
                  name="doctor_str"
                  placeholder="Nomor Surat Tanda Registrasi"
                  value={formData.doctor_str}
                  onChange={handleInputChange}
                />
                {errorMessages.doctor_str && (
                  <div className="invalid-feedback">{errorMessages.doctor_str}</div>
                )} 
              </div>

              <div className="col-md-6">
                <Label htmlFor="doctor_sipp">Nomor SIP</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_sipp ? "is-invalid" : ""}`}                  
                    id="doctor_sipp"
                    name="doctor_sipp"
                    placeholder="Nomor Surat Izin Praktik"
                    value={formData.doctor_sipp}
                    onChange={handleInputChange}
                  />
                  {errorMessages.doctor_sipp && (
                    <div className="invalid-feedback">{errorMessages.doctor_sipp}</div>
                  )} 
                </div>
              </div>
            </form>
            <br />
            <div className="button-container d-flex justify-content-center">
              <Button
                type="submit"
                className="btn btn-primary"
                text="Selanjutnya"
                onClick={handleCreateProfile}
              />
          </div> 
        </div> 
      </div>
  );
};

export default RegisDataPribadi;