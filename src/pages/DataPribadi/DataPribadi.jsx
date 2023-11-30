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

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form submitted:", formData);
    };

    const openFileInput = () => {
      document.getElementById("imageInput").click();
    };
  
    const [showProfileModal, setShowProfileModal] = useState(false);
  
    const handleSubmitClick = () => {
      if (
        formData.namaLengkap.trim() === "" ||
        formData.email.trim() === "" ||
        formData.nik.trim() === "" ||
        formData.noHandphone.trim() === "" ||
        formData.tanggalLahir.trim() === "" ||
        formData.provinsi.trim() === "" ||
        formData.jenisKelamin.trim() === "" ||
        formData.kotaKabupaten.trim() === "" 
      ) {
        alert("Please fill in all the fields before submitting.");
      } else {
        setShowProfileModal(true);
      }    };
  
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
        <BackButton />
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
            <form className="data-pribadi-form" onSubmit={handleSubmit}>
            <h4 className="data-pribadi-title">Data Pribadi</h4>
            <div className="row mb-3">
            <div className="col-md-6">
              <Label htmlFor="namaLengkap">Nama Lengkap</Label>
                <div className="input-with-icon">
                  <FontAwesomeIcon className="icon" icon={faUser} />
                  <Input
                    type="text"
                    id="namaLengkap"
                    name="namaLengkap"
                    placeholder="Masukkan Nama Lengkap"
                    value={formData.namaLengkap}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <Label htmlFor="email">Email</Label>
                <div className="input-with-icon">
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <Label htmlFor="nik">NIK</Label>
                <Input
                  type="text"
                  id="nik"
                  name="nik"
                  placeholder="Masukkan NIK"
                  value={formData.nik}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-6">
                <Label htmlFor="noHandphone">No Handphone</Label>
                <div className="input-with-icon">
                  <FontAwesomeIcon className="icon" icon={faPhone} />
                  <Input
                    type="tel"
                    id="noHandphone"
                    name="noHandphone"
                    placeholder="Masukkan No Handphone"
                    value={formData.noHandphone}
                    onChange={handleInputChange}
                  />
                </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor="tanggalLahir">Tanggal Lahir</Label>
                  <Input
                    type="date"
                    id="tanggalLahir"
                    name="tanggalLahir"
                    placeholder="Pilih Tanggal Lahir"
                    value={formData.tanggalLahir}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-md-6">
                  <Label htmlFor="provinsi">Provinsi</Label>
                  <Input
                    type="text"
                    id="provinsi"
                    name="provinsi"
                    placeholder="Masukkan Provinsi"
                    value={formData.provinsi}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor="jenisKelamin">Jenis Kelamin</Label>
                  <InputSelect
                    className="form-select"
                    id="jenisKelamin"
                    name="jenisKelamin"
                    title="Pilih"
                    options={["Laki-laki", "Perempuan"]}
                    value={formData.jenisKelamin}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-md-6">
                  <Label htmlFor="kotaKabupaten">Kota/Kabupaten</Label>
                  <Input
                    type="text"
                    id="kotaKabupaten"
                    name="kotaKabupaten"
                    placeholder="Masukkan Kota/Kabupaten"
                    value={formData.kotaKabupaten}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </form>
            <br />
            <div className="buttons-container d-flex justify-content-center mb-3">
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
