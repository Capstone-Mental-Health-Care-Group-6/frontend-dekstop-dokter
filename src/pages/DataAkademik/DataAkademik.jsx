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

  const [showProfileModal, setShowProfileModal] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    asalUniversitas: "",
    jenjangPendidikan: "",
    tahunMasuk: "",
    tahunTamat: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitClick = () => {
    const newErrorMessages = {
      asalUniversitas: !formData.asalUniversitas ? "Asal Universitas wajib diisi" : "",
      jenjangPendidikan: !formData.jenjangPendidikan ? "Jenjang Pendidikan wajib diisi" : "",
      tahunMasuk: !formData.tahunMasuk ? "Tahun Masuk wajib diisi" : "",
      tahunTamat: !formData.tahunTamat ? "Tahun Tamat wajib diisi" : "",
    };

    setErrorMessages(newErrorMessages);

    if (!formData.asalUniversitas || !formData.jenjangPendidikan || !formData.tahunMasuk || !formData.tahunTamat) {
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
      <div className="data-akademik">
      <div className="container">
        <BackButton location={'/dokter-profile'}/>
        <form className="data-akademik-form" onSubmit={handleInputChange}> 
          <h4 className="data-akademik-title">Data Akademik</h4>
          <div className="row mb-3">
            <div className="col-md-6">
              <Label htmlFor="asalUniversitas">Asal Universitas</Label>
              <Input
                type="text"
                className={`form-control mb-2 ${errorMessages.asalUniversitas ? "is-invalid" : ""}`}                  
                id="asalUniversitas"
                name="asalUniversitas"
                placeholder="Masukkan Asal Universitas"
                value={formData.asalUniversitas}
                onChange={handleInputChange}
              />
              {errorMessages.asalUniversitas && (
                <div className="invalid-feedback">{errorMessages.asalUniversitas}</div>
              )} 
            </div>

            <div className="col-md-6">
              <Label htmlFor="jenjangPendidikan">Jenjang Pendidikan</Label>
              <Input
                type="text"
                className={`form-control mb-2 ${errorMessages.jenjangPendidikan ? "is-invalid" : ""}`}                  
                id="jenjangPendidikan"
                name="jenjangPendidikan"
                placeholder="Masukkan Jenjang Pendidikan"
                value={formData.jenjangPendidikan}
                onChange={handleInputChange}
              />
              {errorMessages.jenjangPendidikan && (
                <div className="invalid-feedback">{errorMessages.jenjangPendidikan}</div>
              )} 
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <Label htmlFor="tahunMasuk">Tahun Masuk Universitas</Label>
              <Input
                type="text"
                className={`form-control mb-2 ${errorMessages.tahunMasuk ? "is-invalid" : ""}`}                  
                id="tahunMasuk"
                name="tahunMasuk"
                placeholder="Masukkan Tahun Masuk"
                value={formData.tahunMasuk}
                onChange={handleInputChange}
              />
              {errorMessages.tahunMasuk && (
                <div className="invalid-feedback">{errorMessages.tahunMasuk}</div>
              )}              
            </div>

            <div className="col-md-6">
              <Label htmlFor="tahunTamat">Tahun Tamat Universitas</Label>
              <Input
                type="text"
                className={`form-control mb-2 ${errorMessages.tahunTamat ? "is-invalid" : ""}`}                  
                id="tahunTamat"
                name="tahunTamat"
                placeholder="Masukkan Tahun Tamat"
                value={formData.tahunTamat}
                onChange={handleInputChange}
              />
              {errorMessages.tahunTamat && (
                <div className="invalid-feedback">{errorMessages.tahunTamat}</div>
              )} 
            </div>
          </div>
          <br />
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
      </div>
    </Layouts>
  );
};

export default DataAkademik;
