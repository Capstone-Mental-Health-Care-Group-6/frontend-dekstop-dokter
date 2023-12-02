import React, { useState } from "react";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import "./RegisDataAkademik.styles.css";

const RegisDataAkademik = () => {
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

  return (
    <div className="register-data-akademik">
      <div className="container">
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
        <div className="button-container d-flex justify-content-center">
          <Button
            type="submit"
            className="btn btn-primary"
            text="Selanjutnya"
            // onClick={handleSubmitClick}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisDataAkademik;
