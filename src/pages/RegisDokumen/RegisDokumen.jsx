import React, { useState } from "react";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import './RegisDokumen.styles.css';
import Input from "../../components/elements/Input/Input";

const RegisDokumen = () => {
  const [cvFile, setCvFile] = useState(null);
  const [sipFile, setSipFile] = useState(null);
  const [ijazahFile, setIjazahFile] = useState(null);

  const handleFileChange = (event, setFile, setInputValue) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    setInputValue(selectedFile ? selectedFile.name : "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("CV File:", cvFile);
    console.log("SIP File:", sipFile);
    console.log("Ijazah File:", ijazahFile);
  };

  return (
    <div className="dokumen">
      <div className="container">
        <form className="dokumen-form" onSubmit={handleSubmit}>
          <h4 className="dokumen-title">Dokumen</h4>

          <div className="row">
            <div className="ketentuan-container">
              <h4 className="teks-ketentuan">Ketentuan File:</h4>
              <ul className="ketentuan">
                <li>File maksimal berukuran 10 MB</li>
                <li>Dalam format PDF</li>
              </ul>
            </div>
          </div>

          {/* CV Section */}
          <div className="row">
            <Label htmlFor="cv">Curriculum Vitae (CV)</Label>
            <div className="input-group mb-3">
              <div className="form-control-wrapper">
                <Input
                  type="text"
                  className="form-control mb-2"
                  id="cv"
                  name="cv"
                  readOnly
                />
                <label className="btn btn-outline-primary mb-2 choose-file-btn">
                  Pilih File
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      handleFileChange(e, setCvFile, (value) =>
                        document.getElementById("cv").value = value
                      )
                    }
                  />
                </label>
              </div>
            </div>
          </div>

          {/* SIP Section */}
          <div className="row">
            <Label htmlFor="sip">Surat Izin Praktek (SIP)</Label>
            <div className="input-group mb-3">
              <div className="form-control-wrapper">
              <Input
                type="text"
                className="form-control mb-2"
                id="sip"
                name="sip"
                readOnly
              />
              <label className="btn btn-outline-primary mb-2 choose-file-btn">
                Pilih File
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    handleFileChange(e, setSipFile, (value) =>
                      document.getElementById("sip").value = value
                    )
                  }
                />
              </label>
              </div>
            </div>
          </div>

          {/* Ijazah Terakhir Section */}
          <div className="row">
            <Label htmlFor="ijazah">Ijazah Terakhir</Label>
            <div className="input-group mb-3">
            <div className="form-control-wrapper">
            <Input
                type="text"
                className="form-control mb-2"
                id="ijazah"
                name="ijazah"
                readOnly
              />
              <label className="btn btn-outline-primary mb-2 choose-file-btn">
                Pilih File
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    handleFileChange(e, setIjazahFile, (value) =>
                      document.getElementById("ijazah").value = value
                    )
                  }
                />
              </label>
            </div>
            </div>
          </div>
        </form>
        <br />
        <div className="button-container d-flex justify-content-center mb-3">
          <Button
            type="button"
            className="btn btn-primary"
            text="Simpan Perubahan"
            // onClick={handleSubmitClick}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisDokumen;
