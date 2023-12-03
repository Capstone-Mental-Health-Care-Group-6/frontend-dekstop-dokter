import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import "./Pengalaman.styles.css";
import BackButton from "../../components/elements/Button/BackButton";
import ModalProfile from "../../components/fragments/Modal/ModalProfile";

const Pengalaman = () => {
  const [formData, setFormData] = useState([
    {
      namaPerusahaan: "",
      jabatan: "",
      awalBekerja: "",
      akhirBekerja: "",
      alamatPerusahaan: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  const handleAddData = () => {
    setFormData([
      ...formData,
      {
        namaPerusahaan: "",
        jabatan: "",
        awalBekerja: "",
        akhirBekerja: "",
        alamatPerusahaan: "",
      },
    ]);
  };

  const [showProfileModal, setShowProfileModal] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    namaPerusahaan: "",
    jabatan: "",
    awalBekerja: "",
    akhirBekerja: "",
    alamatPerusahaan: "",
  });

  const handleSubmitClick = () => {
    const newErrorMessages = formData.map((data, index) => ({
      namaPerusahaan: !data.namaPerusahaan ? `Nama Perusahaan wajib diisi (${index + 1})` : "",
      jabatan: !data.jabatan ? `Jabatan wajib diisi (${index + 1})` : "",
      awalBekerja: !data.awalBekerja ? `Awal Bekerja wajib diisi (${index + 1})` : "",
      akhirBekerja: !data.akhirBekerja ? `Akhir Bekerja wajib diisi (${index + 1})` : "",
      alamatPerusahaan: !data.alamatPerusahaan ? `Alamat Perusahaan wajib diisi (${index + 1})` : "",
    }));

    setErrorMessages(newErrorMessages.reduce((acc, curr) => ({ ...acc, ...curr }), {}));

    if (newErrorMessages.some((error) => Object.values(error).some((value) => value !== ""))) {
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
      <div className="pengalaman">
        <div className="container justify-content-center">
          <BackButton location={"/dokter-profile"} />
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
                    placeholder="Masukkan Nama Perusahaan"
                    value={data.namaPerusahaan}
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
                    placeholder="Masukkan Jabatan di Perusahaan"
                    value={data.jabatan}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.jabatan && (
                    <div className="invalid-feedback">{errorMessages.jabatan}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`awalBekerja${index}`}>Awal Bekerja</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.awalBekerja ? "is-invalid" : ""}`}
                    id={`awalBekerja${index}`}
                    name="awalBekerja"
                    placeholder="Masukkan Awal Bekerja"
                    value={data.awalBekerja}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.awalBekerja && (
                    <div className="invalid-feedback">{errorMessages.awalBekerja}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`akhirBekerja${index}`}>Akhir Bekerja</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.akhirBekerja ? "is-invalid" : ""}`}
                    id={`akhirBekerja${index}`}
                    name="akhirBekerja"
                    placeholder="Masukkan Akhir Bekerja"
                    value={data.akhirBekerja}
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
                    placeholder="Masukkan Alamat Perusahaan"
                    value={data.alamatPerusahaan}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.alamatPerusahaan && (
                    <div className="invalid-feedback">{errorMessages.alamatPerusahaan}</div>
                  )}
                </div>
              </div>
            </form>
          ))}

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
