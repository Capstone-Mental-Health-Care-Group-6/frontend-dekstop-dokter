import React, { useState } from "react";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import BackButton from "../../components/elements/Button/BackButton";
import "./RegisDataAkademik.styles.css";

const RegisDataAkademik = () => {
  const [formData, setFormData] = useState([
    {
      asalUniversitas: "",
      jenjangPendidikan: "",
      tahunMasuk: "",
      tahunTamat: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
  
    if (name === 'tahunMasuk' || name === 'tahunTamat') {
      const isNumeric = /^\d+$/.test(value);
  
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: isNumeric ? '' : `Tahun ${name === 'tahunMasuk' ? 'Masuk' : 'Tamat'} harus berupa angka`,
      }));
    }
  
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };
  


  const handleAddData = () => {
    setFormData([
      ...formData,
      {
        asalUniversitas: "",
        jenjangPendidikan: "",
        tahunMasuk: "",
        tahunTamat: "",
      },
    ]);
  };


  const [errorMessages, setErrorMessages] = useState({
    asalUniversitas: "",
    jenjangPendidikan: "",
    tahunMasuk: "",
    tahunTamat: "",
  });

  const handleSubmitClick = () => {
    const newErrorMessages = formData.map((data, index) => ({
      asalUniversitas: !data.asalUniversitas ? `Asal Universitas wajib diisi (${index + 1})` : "",
      jenjangPendidikan: !data.jenjangPendidikan ? `Jenjang Pendidikan wajib diisi (${index + 1})` : "",
      tahunMasuk: !data.tahunMasuk ? `Tahun Masuk wajib diisi (${index + 1})` : "",
      tahunTamat: !data.tahunTamat ? `Tahun Tamat wajib diisi (${index + 1})` : "",
    }));

    setErrorMessages(newErrorMessages.reduce((acc, curr) => ({ ...acc, ...curr }), {}));

    if (newErrorMessages.some((error) => Object.values(error).some((value) => value !== ""))) {
      return;
    }
  };

  return (
      <div className="regis-data-akademik">
        <div className="container">
          <BackButton location={'/dokter/profile'}/>
          {formData.map((data, index) => (
            <form className="data-akademik-form" key={index}>
              <h4 className="data-akademik-title">Data Akademik</h4>
              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`asalUniversitas ${index}`}>Asal Universitas</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.asalUniversitas ? "is-invalid" : ""}`}
                    id={`asalUniversitas${index}`}
                    name="asalUniversitas"
                    placeholder="Universitas"
                    value={data.asalUniversitas}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.asalUniversitas && (
                    <div className="invalid-feedback">{errorMessages.asalUniversitas}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`jenjangPendidikan ${index}`}>Jenjang Pendidikan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.jenjangPendidikan ? "is-invalid" : ""}`}
                    id={`jenjangPendidikan${index}`}
                    name="jenjangPendidikan"
                    placeholder="Jenjang"
                    value={data.jenjangPendidikan}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.jenjangPendidikan && (
                    <div className="invalid-feedback">{errorMessages.jenjangPendidikan}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`tahunMasuk ${index}`}>Tahun Masuk Universitas</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.tahunMasuk ? "is-invalid" : ""}`}
                    id={`tahunMasuk${index}`}
                    name="tahunMasuk"
                    placeholder="Tahun Masuk"
                    value={data.tahunMasuk}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.tahunMasuk && (
                    <div className="invalid-feedback">{errorMessages.tahunMasuk}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`tahunTamat ${index}`}>Tahun Tamat Universitas</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.tahunTamat ? "is-invalid" : ""}`}
                    id={`tahunTamat${index}`}
                    name="tahunTamat"
                    placeholder="Tahun Tamat"
                    value={data.tahunTamat}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.tahunTamat && (
                    <div className="invalid-feedback">{errorMessages.tahunTamat}</div>
                  )}
                </div>
              </div>
              <br />
            </form>
          ))}

          <div className="buttons-container d-flex justify-content-end">
            {/* Add Data Button */}
            <Button
              type="button"
              className="btn btn-outline-primary"
              text="+ Tambah Data"
              onClick={handleAddData}
            />
          </div>

          <div className="button-container d-flex justify-content-center">
            <Button
              type="button"
              className="btn btn-primary"
              text="Simpan Perubahan"
              onClick={handleSubmitClick}
            />
          </div>
        </div>
      </div>
  );
};

export default RegisDataAkademik;