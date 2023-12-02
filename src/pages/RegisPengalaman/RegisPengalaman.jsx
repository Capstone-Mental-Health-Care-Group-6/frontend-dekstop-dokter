import React, { useState } from "react";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import "./RegisPengalaman.styles.css";

const RegisPengalaman = () => {
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

  return (
    <div className="register-pengalaman">
      <div className="container justify-content-center">
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
            text="Selanjutnya"
            // onClick={handleSubmitClick}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisPengalaman;
