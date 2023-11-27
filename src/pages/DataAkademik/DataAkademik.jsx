import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import ModalProfile from "../../components/fragments/Modal/ModalProfile";
import BackButton from "../../components/elements/Button/BackButton";
import "./DataAkademik.styles.css";

const DataAkademik = () => {
  const [formData, setFormData] = useState({
    asalUniversitas: "",
    jenjangPendidikan: "",
    tahunMasuk: "",
    tahunTamat: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleSubmitClick = () => {
    if (
      formData.asalUniversitas.trim() === "" ||
      formData.jenjangPendidikan.trim() === "" ||
      formData.tahunMasuk.trim() === "" ||
      formData.tahunTamat.trim() === ""
    ) {
      alert("Please fill in all the fields before submitting.");
    } else {
      setShowProfileModal(true);
    }
  };

  const handleSubmitConfirm = () => {
    setShowProfileModal(false);
  };

  const handleSubmitCancel = () => {
    setShowProfileModal(false);
  };

  return (
    <Layouts>
      <div className="container">
        <BackButton />
        {/* Form */}
        <form className="data-akademik-form">
          <h4 className="data-akademik-title">Data Akademik</h4>
          <div className="row mb-3">
            <div className="col-md-6">
              <Label htmlFor="asalUniversitas">Asal Universitas</Label>
              <Input
                type="text"
                id="asalUniversitas"
                name="asalUniversitas"
                placeholder="Masukkan Asal Universitas"
                value={formData.asalUniversitas}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-6">
              <Label htmlFor="jenjangPendidikan">Jenjang Pendidikan</Label>
              <Input
                type="text"
                id="jenjangPendidikan"
                name="jenjangPendidikan"
                placeholder="Masukkan Jenjang Pendidikan"
                value={formData.jenjangPendidikan}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <Label htmlFor="tahunMasuk">Tahun Masuk Universitas</Label>
              <Input
                type="text"
                id="tahunMasuk"
                name="tahunMasuk"
                placeholder="Masukkan Tahun Masuk"
                value={formData.tahunMasuk}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-6">
              <Label htmlFor="tahunTamat">Tahun Tamat Universitas</Label>
              <Input
                type="text"
                id="tahunTamat"
                name="tahunTamat"
                placeholder="Masukkan Tahun Tamat"
                value={formData.tahunTamat}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <br />
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

export default DataAkademik;
