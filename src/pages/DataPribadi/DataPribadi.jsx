import React from "react";
import Layouts from "../../components/layouts/Layouts";
import CardProfile from "../../components/fragments/Card/CardProfile";
import DatePicker from "react-datepicker"; // Import the date picker component
import "react-datepicker/dist/react-datepicker.css";
import InputForm from "../../components/fragments/InputForm/InputForm";

const DataPribadi = () => {
  const titleProfile = "Your Card Title";
  const textProfile = "";

  const handleInputChange = (e) => {
    // Handle input changes here
  };

  const handleDateChange = (date) => {
    // Handle date changes here
  };

  return (
    <>
      <Layouts>
        <div className="row">
          <div className="col-md-6">
            <CardProfile titleProfile={titleProfile} textProfile={textProfile} />
          </div>
          <div className="container mt-5">
            <h2>Data Pribadi</h2>

            <form>
              <div className="row">
                <div className="col-md-6">
                  {/* Nama Lengkap */}
                  <InputForm
                    type="text"
                    label="Nama Lengkap"
                    name="namaLengkap"
                    id="namaLengkap"
                    placeholder="Masukkan Nama Lengkap"
                    onChange={handleInputChange}
                  />

                  {/* NIK */}
                  <InputForm
                    type="text"
                    label="NIK"
                    name="nik"
                    id="nik"
                    placeholder="Masukkan NIK"
                    onChange={handleInputChange}
                  />

                  {/* Tanggal Lahir */}
                  <div className="form-group">
                    <label htmlFor="tanggalLahir">Tanggal Lahir</label>
                    <DatePicker
                      selected={null} // Set the selected date
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                    />
                  </div>

                  {/* Jenis Kelamin */}
                  <div className="form-group">
                    <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                    <select
                      className="form-control"
                      id="jenisKelamin"
                      name="jenisKelamin"
                      onChange={handleInputChange}
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="laki-laki">Laki-Laki</option>
                      <option value="perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  {/* Email */}
                  <InputForm
                    type="email"
                    label="Email"
                    name="email"
                    id="email"
                    placeholder="Masukkan Email"
                    onChange={handleInputChange}
                  />

                  {/* No Handphone */}
                  <InputForm
                    type="tel"
                    label="No Handphone"
                    name="noHandphone"
                    id="noHandphone"
                    placeholder="Masukkan No Handphone"
                    onChange={handleInputChange}
                  />

                  {/* Provinsi */}
                  <InputForm
                    type="text"
                    label="Provinsi"
                    name="provinsi"
                    id="provinsi"
                    placeholder="Masukkan Provinsi"
                    onChange={handleInputChange}
                  />

                  {/* Kota/Kabupaten */}
                  <InputForm
                    type="text"
                    label="Kota/Kabupaten"
                    name="kotaKabupaten"
                    id="kotaKabupaten"
                    placeholder="Masukkan Kota/Kabupaten"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default DataPribadi;
