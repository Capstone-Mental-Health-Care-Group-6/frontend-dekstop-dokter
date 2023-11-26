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

  const handleSubmitClick = () => {
    // Validation: Check if any of the input fields are empty
    const hasEmptyFields = formData.some(
      (data) => Object.values(data).some((value) => value.trim() === "")
    );

    if (hasEmptyFields) {
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
      <div className="container justify-content-center">
        <BackButton />
        {formData.map((data, index) => (
          <form className="pengalaman-form" key={index}>
            <h4 className="pengalaman-title">Pengalaman Kerja</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <Label htmlFor={`namaPerusahaan${index}`}>Nama Perusahaan</Label>
                <Input
                  type="text"
                  id={`namaPerusahaan${index}`}
                  name="namaPerusahaan"
                  placeholder="Masukkan Nama Perusahaan"
                  value={data.namaPerusahaan}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>

              <div className="col-md-6">
                <Label htmlFor={`jabatan${index}`}>Jabatan di Perusahaan</Label>
                <Input
                  type="text"
                  id={`jabatan${index}`}
                  name="jabatan"
                  placeholder="Masukkan Jabatan di Perusahaan"
                  value={data.jabatan}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <Label htmlFor={`awalBekerja${index}`}>Awal Bekerja</Label>
                <Input
                  type="text"
                  id={`awalBekerja${index}`}
                  name="awalBekerja"
                  placeholder="Masukkan Awal Bekerja"
                  value={data.awalBekerja}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>

              <div className="col-md-6">
                <Label htmlFor={`akhirBekerja${index}`}>Akhir Bekerja</Label>
                <Input
                  type="text"
                  id={`akhirBekerja${index}`}
                  name="akhirBekerja"
                  placeholder="Masukkan Akhir Bekerja"
                  value={data.akhirBekerja}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <Label htmlFor={`alamatPerusahaan${index}`}>Alamat Perusahaan</Label>
              <Input
                type="text"
                id={`alamatPerusahaan${index}`}
                name="alamatPerusahaan"
                placeholder="Masukkan Alamat Perusahaan"
                value={data.alamatPerusahaan}
                onChange={(e) => handleInputChange(index, e)}
              />
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

        <div className="buttons-container d-flex justify-content-center mb-3">
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
    </Layouts>
  );
};

export default Pengalaman;
