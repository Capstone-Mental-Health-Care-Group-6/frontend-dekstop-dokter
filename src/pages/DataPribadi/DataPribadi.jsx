  import React, { useState } from "react";
  import Layouts from "../../components/layouts/Layouts";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faUser, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
  import Input from "../../components/elements/Input/Input";
  import Label from "../../components/elements/Input/Label";
  import InputSelect from "../../components/elements/Input/InputSelect";
  import Button from "../../components/elements/Button/Button";
  import BackButton from "../../components/elements/Button/BackButton";
  import "./DataPribadi.styles.css"
  import ModalProfile from "../../components/fragments/Modal/ModalProfile";

  const DataPribadi = () => {
    const [formData, setFormData] = useState({
      namaLengkap: "",
      email: "",
      nik: "",
      noHandphone: "",
      tanggalLahir: "",
      provinsi: "",
      jenisKelamin: "",
      kotaKabupaten: "",
      str: "",
      noSip: "",
    });

    const [errorMessages, setErrorMessages] = useState({
      namaLengkap: "",
      email: "",
      nik: "",
      noHandphone: "",
      tanggalLahir: "",
      provinsi: "",
      jenisKelamin: "",
      kotaKabupaten: "",
      str: "",
      noSip: "",
    });

    const [selectedImage, setSelectedImage] = useState(null);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const openFileInput = () => {
      document.getElementById("imageInput").click();
    };
  
    const [showProfileModal, setShowProfileModal] = useState(false);
  
    const handleSubmitClick = () => {
      const newErrorMessages = {
        namaLengkap: !formData.namaLengkap ? "Nama lengkap wajib diisi" : "",
        email: !formData.email ? "Email wajib diisi" : "",
        nik: !formData.nik ? "NIK wajib diisi" : "",
        noHandphone: !formData.noHandphone ? "Nomor handphone wajib diisi" : "",
        tanggalLahir: !formData.tanggalLahir ? "Tanggal lahir wajib diisi" : "",
        provinsi: !formData.provinsi ? "Provinsi wajib diisi" : "",
        jenisKelamin: !formData.jenisKelamin ? "Jenis kelamin wajib dipilih" : "",
        kotaKabupaten: !formData.kotaKabupaten ? "Kota/Kabupaten wajib diisi" : "",
        str: !formData.str ? "Nomor STR wajib dipilih" : "",
        noSip: !formData.noSip ? "Nomor SIP wajib diisi" : "",
      };
  
      setErrorMessages(newErrorMessages);
  
      if (!formData.namaLengkap || !formData.email || !formData.nik || !formData.noHandphone || !formData.tanggalLahir || !formData.provinsi || !formData.jenisKelamin || !formData.kotaKabupaten || !formData.str || !formData.noSip) {
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

    const defaultImagePath = "../src/assets/Gambar.png";

    return (
      <Layouts>
      <div className="data-pribadi">
        <BackButton location={'/dokter-profile'} />
        <div className="card mb-3">
          <label htmlFor="imageInput">
            <div className="card-body" onClick={openFileInput}>
              <div className="row mb-3">
                <div className="col-md-4">
                  {selectedImage ? (
                    <img src={selectedImage} className="img-fluid" alt="Profile" />
                  ) : (
                    <img src={defaultImagePath} className="img-fluid" alt="Default" />
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
              <Label htmlFor="namaLengkap">Nama Lengkap</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.namaLengkap ? "is-invalid" : ""}`}                  
                    id="namaLengkap"
                    name="namaLengkap"
                    placeholder="Masukkan Nama Lengkap"
                    value={formData.namaLengkap}
                    onChange={handleInputChange}
                  />
                  {errorMessages.namaLengkap && (
                    <div className="invalid-feedback">{errorMessages.namaLengkap}</div>
                  )} 
              </div>

              <div className="col-md-6">
                <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    className={`form-control mb-2 ${errorMessages.email ? "is-invalid" : ""}`}                  
                    id="email"
                    name="email"
                    placeholder="Masukkan Email"
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
                <Label htmlFor="nik">NIK</Label>
                <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.nik ? "is-invalid" : ""}`}                  
                  id="nik"
                  name="nik"
                  placeholder="Masukkan NIK"
                  value={formData.nik}
                  onChange={handleInputChange}
                />
                {errorMessages.nik && (
                  <div className="invalid-feedback">{errorMessages.nik}</div>
                )} 
              </div>

              <div className="col-md-6">
                <Label htmlFor="noHandphone">No Handphone</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.noHandphone ? "is-invalid" : ""}`}                  
                    id="noHandphone"
                    name="noHandphone"
                    placeholder="Masukkan No Handphone"
                    value={formData.noHandphone}
                    onChange={handleInputChange}
                  />
                  {errorMessages.noHandphone && (
                    <div className="invalid-feedback">{errorMessages.noHandphone}</div>
                  )} 
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor="tanggalLahir">Tanggal Lahir</Label>
                  <Input
                    type="date"
                    className={`form-control mb-2 ${errorMessages.tanggalLahir ? "is-invalid" : ""}`}                  
                    id="tanggalLahir"
                    name="tanggalLahir"
                    placeholder="Pilih Tanggal Lahir"
                    value={formData.tanggalLahir}
                    onChange={handleInputChange}
                  />
                  {errorMessages.tanggalLahir && (
                    <div className="invalid-feedback">{errorMessages.tanggalLahir}</div>
                  )} 
                </div>

                <div className="col-md-6">
                  <Label htmlFor="provinsi">Provinsi</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.provinsi ? "is-invalid" : ""}`}                  
                    id="provinsi"
                    name="provinsi"
                    placeholder="Masukkan Provinsi"
                    value={formData.provinsi}
                    onChange={handleInputChange}
                  />
                  {errorMessages.provinsi && (
                    <div className="invalid-feedback">{errorMessages.provinsi}</div>
                  )} 
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
                  <InputSelect
                    className={`form-select ${errorMessages.jenisKelamin ? "is-invalid" : ""}`}
                    id="jenisKelamin"
                    name="jenisKelamin"
                    title="Jenis Kelamin"
                    options={["Laki-laki", "Perempuan"]}
                    value={formData.jenisKelamin}
                    onChange={handleInputChange}
                  />
                  {errorMessages.jenisKelamin && (
                    <div className="invalid-feedback">{errorMessages.jenisKelamin}</div>
                  )} 
                </div>

                <div className="col-md-6">
                  <Label htmlFor="kotaKabupaten">Kota/Kabupaten</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.kotaKabupaten ? "is-invalid" : ""}`}                  
                    id="kotaKabupaten"
                    name="kotaKabupaten"
                    placeholder="Masukkan Kota/Kabupaten"
                    value={formData.kotaKabupaten}
                    onChange={handleInputChange}
                  />
                  {errorMessages.kotaKabupaten && (
                    <div className="invalid-feedback">{errorMessages.kotaKabupaten}</div>
                  )} 
                </div>
              </div>

              <div className="row mb-3">
              <div className="col-md-6">
                <Label htmlFor="str">Nomor STR</Label>
                <Input
                  type="text"
                  className={`form-control mb-2 ${errorMessages.str ? "is-invalid" : ""}`}                  
                  id="str"
                  name="str"
                  placeholder="Masukkan Nomor STR"
                  value={formData.str}
                  onChange={handleInputChange}
                />
                {errorMessages.str && (
                  <div className="invalid-feedback">{errorMessages.str}</div>
                )} 
              </div>

              <div className="col-md-6">
                <Label htmlFor="noSip">Nomor SIP</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.noSip ? "is-invalid" : ""}`}                  
                    id="noSip"
                    name="noSip"
                    placeholder="Masukkan Nomor SIP"
                    value={formData.noSip}
                    onChange={handleInputChange}
                  />
                  {errorMessages.noSip && (
                    <div className="invalid-feedback">{errorMessages.noSip}</div>
                  )} 
                </div>
              </div>
            </form>
            <br />
            <div className="button-container d-flex justify-content-center mb-3">
              <Button
                type="submit"
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
      </Layouts>
    );
  };

  export default DataPribadi;
