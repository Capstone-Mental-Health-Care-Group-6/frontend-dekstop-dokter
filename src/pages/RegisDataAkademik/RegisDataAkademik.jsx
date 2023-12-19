import React, { useState, useContext } from "react";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import BackButton from "../../components/elements/Button/BackButton";
import "./RegisDataAkademik.styles.css";
import { MyContext } from "../../context/ProfileDoctorContext";

const RegisDataAkademik = ({ onNext }) => {
  const [formData, setFormData] = useState([
    {
      doctor_university: "",
      doctor_study_program: "",
      doctor_enroll_year: "",
      doctor_graduate_year: "",
    },
  ]);

  const { dataDoctor, setDataDoctor } = useContext(MyContext);
  console.log(dataDoctor)

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;  
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };
  
  const handleAddData = () => {
    if (formData.length < 5) {
      setFormData((prevData) => [
        ...prevData,
        {
          doctor_university: "",
          doctor_study_program: "",
          doctor_enroll_year: "",
          doctor_graduate_year: "",
        },
      ]);
    }
  };

  const [errorMessages, setErrorMessages] = useState({
    doctor_university: "",
    doctor_study_program: "",
    doctor_enroll_year: "",
    doctor_graduate_year: "",
  });
  
  const handleSubmitClick = (e) => {
    e.preventDefault();

    const newErrorMessages = formData.map((data, index) => ({
      doctor_university: !data.doctor_university ? `Asal Universitas wajib diisi (${index + 1})` : "",
      doctor_study_program: !data.doctor_study_program ? `Jenjang Pendidikan wajib diisi (${index + 1})` : "",
      doctor_enroll_year: !data.doctor_enroll_year ? `Tahun Masuk wajib diisi (${index + 1})` : "",
      doctor_graduate_year: !data.doctor_graduate_year ? `Tahun Tamat wajib diisi (${index + 1})` : "",
    }));

    setErrorMessages(newErrorMessages.reduce((acc, curr) => ({ ...acc, ...curr }), {}));

    if (newErrorMessages.some((error) => Object.values(error).some((value) => value !== ""))) {
      return;
    }

    setDataDoctor([...dataDoctor, formData]);
    setFormData([
    {
      doctor_university: "",
      doctor_study_program: "",
      doctor_enroll_year: "",
      doctor_graduate_year: "",
    }
  ]);

  onNext();

  };

  return (
      <div className="regis-data-akademik">
        <div className="container">
          <BackButton location={'/dokter/regis/data-pribadi'}/>
          <div className="step-regis">
            <h4>2 / 5</h4>
          </div> 
          {formData.map((data, index) => (
            <form className="data-akademik-form" key={index}>
              <h4 className="data-akademik-title">Data Akademik</h4>
              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`doctor_university ${index}`}>Asal Universitas</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_university ? "is-invalid" : ""}`}
                    id={`doctor_university${index}`}
                    name="doctor_university"
                    placeholder="Universitas"
                    value={data.doctor_university}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_university && (
                    <div className="invalid-feedback">{errorMessages.doctor_university}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`doctor_study_program ${index}`}>Jenjang Pendidikan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_study_program ? "is-invalid" : ""}`}
                    id={`doctor_study_program${index}`}
                    name="doctor_study_program"
                    placeholder="Jenjang"
                    value={data.doctor_study_program}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_study_program && (
                    <div className="invalid-feedback">{errorMessages.doctor_study_program}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`doctor_enroll_year ${index}`}>Tahun Masuk Universitas</Label>
                  <Input
                    type="date"
                    className={`form-control mb-2 ${errorMessages.doctor_enroll_year ? "is-invalid" : ""}`}
                    id={`doctor_enroll_year${index}`}
                    name="doctor_enroll_year"
                    placeholder="Tahun Masuk"
                    value={data.doctor_enroll_year}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_enroll_year && (
                    <div className="invalid-feedback">{errorMessages.doctor_enroll_year}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`doctor_graduate_year ${index}`}>Tahun Tamat Universitas</Label>
                  <Input
                    type="date"
                    className={`form-control mb-2 ${errorMessages.doctor_graduate_year ? "is-invalid" : ""}`}
                    id={`doctor_graduate_year${index}`}
                    name="doctor_graduate_year"
                    placeholder="Tahun Tamat"
                    value={data.doctor_graduate_year}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_graduate_year && (
                    <div className="invalid-feedback">{errorMessages.doctor_graduate_year}</div>
                  )}
                </div>
              </div>
              <br />
            </form>
          ))}

          <div className="buttons-container d-flex justify-content-end">
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
              text="Selanjutnya"
              onClick={handleSubmitClick}
            />
          </div>
        </div>
      </div>
  );
};

export default RegisDataAkademik;