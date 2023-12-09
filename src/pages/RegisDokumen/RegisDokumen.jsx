import React, { useState } from "react";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import BackButton from "../../components/elements/Button/BackButton";
import './RegisDokumen.styles.css';
import Input from "../../components/elements/Input/Input";

const RegisDokumen = () => {
  const [cvFile, setCvFile] = useState(null);
  const [sippkFile, setSippkFile] = useState(null);
  const [ijazahFile, setIjazahFile] = useState(null);
  const [strpkFile, setStrpkFile] = useState(null);


  const [errorMessages, setErrorMessages] = useState({
    cv: "",
    sippk: "",
    ijazah: "",
    strpk: "",
  });

  const handleFileChange = (event, setFile, setInputValue, inputName) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    setInputValue(selectedFile ? selectedFile.name : "");

    const newErrorMessages = { ...errorMessages, [inputName]: "" };
    setErrorMessages(newErrorMessages);
  };

  const handleSubmitClick = () => {
    const newErrorMessages = {
      cv: !cvFile ? "CV file wajib diisi" : "",
      sippk: !sippkFile ? "SIPPK file wajib diisi" : "",
      ijazah: !ijazahFile ? "Ijazah file wajib diisi" : "",
      strpk: !strpkFile ? "STRPK wajib diisi" : "",
    };
  
    setErrorMessages(newErrorMessages);
  
    if (!cvFile || !sippkFile || !ijazahFile || !strpkFile) {
      return;
    }
  
    window.location.href = "/dokter/regis/pengalaman";
  };
  
  return (
      <div className="regis-dokumen">
      <div className="container">
        <BackButton location={'/dokter/regis/data-akademik'}/>
        <div className="step-regis">
          <h4>3 / 5</h4>
        </div> 
        <form className="dokumen-form" onSubmit={handleFileChange}>
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
                  className={`form-control mb-2 ${errorMessages.cv ? "is-invalid" : ""}`}
                  id="cv"
                  name="cv"
                  defaultValue={cvFile ? cvFile.name : ""}
                  placeholder="CV Dr.Helen.pdf"
                  readOnly
                />
                  {errorMessages.cv && (
                    <div className="invalid-feedback">{errorMessages.cv}</div>
                  )}  
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
            <Label htmlFor="sippk">Surat Izin Praktik Psikologi Klinis  (SIPPK)</Label>
            <div className="input-group mb-3">
              <div className="form-control-wrapper">
              <Input
                type="text"
                className={`form-control mb-2 ${errorMessages.sippk ? "is-invalid" : ""}`}                  
                id="sippk"
                name="sippk"
                defaultValue={sippkFile ? sippkFile.name : ""}
                placeholder="Surat Izin Praktek.pdf"
                readOnly
              />
              {errorMessages.sippk && (
                <div className="invalid-feedback">{errorMessages.sippk}</div>
              )}
              <label className="btn btn-outline-primary mb-2 choose-file-btn">
                Pilih File
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    handleFileChange(e, setSippkFile, (value) =>
                      document.getElementById("sippk").value = value
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
                className={`form-control mb-2 ${errorMessages.ijazah ? "is-invalid" : ""}`}                  
                id="ijazah"
                name="ijazah"
                defaultValue={ijazahFile ? ijazahFile.name : ""}
                placeholder="Ijazah.pdf"
                readOnly
              />
              {errorMessages.ijazah && (
                <div className="invalid-feedback">{errorMessages.ijazah}</div>
              )}
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

          <div className="row">
            <Label htmlFor="strpk">Surat Tanda Registrasi Psikologi Klinis (STRPK)</Label>
            <div className="input-group mb-3">
            <div className="form-control-wrapper">
            <Input
                type="text"
                className={`form-control mb-2 ${errorMessages.strpk ? "is-invalid" : ""}`}                  
                id="strpk"
                name="strpk"
                defaultValue={strpkFile ? strpkFile.name : ""}
                placeholder="Surat Tanda Registrasi.pdf"
                readOnly
              />
              {errorMessages.strpk && (
                <div className="invalid-feedback">{errorMessages.strpk}</div>
              )}
              <label className="btn btn-outline-primary mb-2 choose-file-btn">
                Pilih File
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    handleFileChange(e, setStrpkFile, (value) =>
                      document.getElementById("strpk").value = value
                    )
                  }
                />
              </label>
            </div>
            </div>
          </div>
        </form>
        <br />
        <div className="button-container d-flex justify-content-center">
          <Button
            type="button"
            className="btn btn-primary"
            text="Selanjutnya"
            onClick={handleSubmitClick}
          />
        </div>
      </div>
      </div>
  );
};

export default RegisDokumen;