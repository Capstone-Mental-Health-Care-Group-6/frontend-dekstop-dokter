import React, { useState, useContext } from "react";
import { gambar } from "../../../image"; 
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import InputSelect from "../../components/elements/Input/InputSelect";
import Button from "../../components/elements/Button/Button";
import "./RegisDataPribadi.styles.css"
import { MyContext } from "../../context/ProfileDoctorContext";

const RegisDataPribadi = ({ onNext }) => {
  const [formData, setFormData] = useState({
    doctor_name: "",
    email: "",
    doctor_nik: "",
    doctor_number_phone: "",
    doctor_dob: "",
    doctor_provinsi: "",
    doctor_gender: "",
    doctor_kota: "",
    doctor_str: "",
    doctor_sipp: "",
    doctor_avatar: null, 
  });

  const { dataDoctor, setDataDoctor } = useContext(MyContext);

  console.log(dataDoctor[0])

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [errorMessages, setErrorMessages] = useState({
    doctor_name: "",
    email: "",
    doctor_nik: "",
    doctor_number_phone: "",
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

    if (name === 'doctor_nik' || name === 'doctor_number_phone' || name === 'doctor_str') {
      const isNumeric = /^\d+$/.test(value);
      
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: isNumeric ? '' : `${name === 'doctor_nik' ? 'NIK' : name === 'doctor_number_phone' ? 'Nomor handphone' : 'Nomor STR'} harus berupa angka`,
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

    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, doctor_avatar: file });
  };

  const openFileInput = () => {
    document.getElementById("imageInput").click();
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
  
    const newErrorMessages = {
      doctor_name: !formData.doctor_name ? "Nama lengkap wajib diisi" : "",
      email: !formData.email ? "Email wajib diisi" : "",
      doctor_nik: !formData.doctor_nik ? "NIK wajib diisi" : "",
      doctor_number_phone: !formData.doctor_number_phone ? "Nomor handphone wajib diisi" : "",
      doctor_dob: !formData.doctor_dob ? "Tanggal lahir wajib diisi" : "",
      doctor_provinsi: !formData.doctor_provinsi ? "Provinsi wajib diisi" : "",
      doctor_gender: !formData.doctor_gender ? "Jenis kelamin wajib dipilih" : "",
      doctor_kota: !formData.doctor_kota ? "Kota/Kabupaten wajib diisi" : "",
      doctor_str: !formData.doctor_str ? "Nomor STR wajib diisi" : "",
      doctor_sipp: !formData.doctor_sipp ? "Nomor SIP wajib diisi" : "",
    };
  
    setErrorMessages(newErrorMessages);
    
    if (
      Object.values(newErrorMessages).some((error) => error !== "") ||
      Object.values(formData).some((value) => value === "")
    ) {
      return;
    }
  
    setDataDoctor([...dataDoctor, formData]);
    setFormData({
      doctor_name: "",
      email: "",
      doctor_nik: "",
      doctor_number_phone: "",
      doctor_dob: "",
      doctor_provinsi: "",
      doctor_gender: "",
      doctor_kota: "",
      doctor_str: "",
      doctor_sipp: "",
      doctor_avatar: null,
    });

    onNext();

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
                    <img src={URL.createObjectURL(formData.doctor_avatar)} className="img-fluid" alt="Profile" />
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
                <Label htmlFor="doctor_number_phone">No Handphone</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_number_phone ? "is-invalid" : ""}`}                  
                    id="doctor_number_phone"
                    name="doctor_number_phone"
                    placeholder="Nomor Ponsel"
                    value={formData.doctor_number_phone}
                    onChange={handleInputChange}
                  />
                  {errorMessages.doctor_number_phone && (
                    <div className="invalid-feedback">{errorMessages.doctor_number_phone}</div>
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
                      { value: "laki", label: "Laki-laki" },
                      { value: "perempuan", label: "Perempuan" },
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
                onClick={handleSubmitClick}
              />
          </div> 
        </div> 
      </div>
  );
};

export default RegisDataPribadi;