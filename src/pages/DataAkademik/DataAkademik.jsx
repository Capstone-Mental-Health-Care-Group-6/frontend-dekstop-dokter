import React from "react";
import Layouts from "../../components/layouts/Layouts";
import InputForm from "../../components/fragments/InputForm/InputForm";

const DataAkademik = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Layouts>
      <div className="container mt-5">
        <h2>Data Akademik</h2>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              {/* Asal Universitas */}
              <InputForm
                type="text"
                label="Asal Universitas"
                name="asalUniversitas"
                id="asalUniversitas"
                placeholder="Masukkan Asal Universitas"
              />

              {/* Tahun Masuk Universitas */}
              <InputForm
                type="text"
                label="Tahun Masuk Universitas"
                name="tahunMasukUniversitas"
                id="tahunMasukUniversitas"
                placeholder="Masukkan Tahun Masuk Universitas"
              />
            </div>

            <div className="col-md-6">
              {/* Jenjang Pendidikan */}
              <InputForm
                type="text"
                label="Jenjang Pendidikan"
                name="jenjangPendidikan"
                id="jenjangPendidikan"
                placeholder="Masukkan Jenjang Pendidikan"
              />

              {/* Tahun Tamat Universitas */}
              <InputForm
                type="text"
                label="Tahun Tamat Universitas"
                name="tahunTamatUniversitas"
                id="tahunTamatUniversitas"
                placeholder="Masukkan Tahun Tamat Universitas"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Simpan Perubahan
          </button>
        </form>
      </div>
    </Layouts>
  );
};

export default DataAkademik;
