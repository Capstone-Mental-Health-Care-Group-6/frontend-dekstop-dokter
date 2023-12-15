import React, { useState, useEffect } from "react";
import Layouts from "../../components/layouts/Layouts";
import Input from "../../components/elements/Input/Input";
import Label from "../../components/elements/Input/Label";
import Button from "../../components/elements/Button/Button";
import "./Pengalaman.styles.css";
import BackButton from "../../components/elements/Button/BackButton";
import ModalProfile from "../../components/fragments/Modal/ModalProfile";
import { NavLink } from "react-router-dom";
import { getAllDoctors, updateProfileExperience } from "../../service/doctor";

const Pengalaman = () => {
  const [formData, setFormData] = useState([
    {
      doctor_company: "",
      doctor_title: "",
      doctor_start_date: "",
      doctor_end_date: "",
      doctor_company_address: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormData = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  const handleAddData = () => {
    if (formData.length < 5) {
      setFormData([
        ...formData,
        {
          doctor_company: "",
          doctor_title: "",
          doctor_start_date: "",
          doctor_end_date: "",
          doctor_company_address: "",
        },
      ]);
    }
  };

  const [showProfileModal, setShowProfileModal] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    doctor_company: "",
    doctor_title: "",
    doctor_start_date: "",
    doctor_end_date: "",
    doctor_company_address: "",
  });

  const handleSubmitClick = () => {
    const newErrorMessages = formData.map((data, index) => ({
      doctor_company: !data.doctor_company ? `Nama Perusahaan wajib diisi (${index + 1})` : "",
      doctor_title: !data.doctor_title ? `Jabatan wajib diisi (${index + 1})` : "",
      doctor_start_date: !data.doctor_start_date ? `Awal Bekerja wajib diisi (${index + 1})` : "",
      doctor_end_date: !data.doctor_end_date ? `Akhir Bekerja wajib diisi (${index + 1})` : "",
      doctor_company_address: !data.doctor_company_address ? `Alamat Perusahaan wajib diisi (${index + 1})` : "",
    }));

    setErrorMessages(newErrorMessages.reduce((acc, curr) => ({ ...acc, ...curr }), {}));

    if (newErrorMessages.some((error) => Object.values(error).some((value) => value !== ""))) {
      return;
    }

    setShowProfileModal(true);
  };

  const handleSubmitConfirm = () => {
    console.log("Data yang akan dikirim:", formData);
  };

  const handleSubmitCancel = () => {
    setShowProfileModal(false);
  };

  const handleUpdateProfileExperience = async () => {
    try {
      const doctorId = "1"; // Replace with the actual doctor's ID
      const apiData = {
        experiences: formData.map((data) => ({
          doctor_company: data.doctor_company,
          doctor_title: data.doctor_title,
          doctor_start_date: data.doctor_start_date,
          doctor_end_date: data.doctor_end_date,
          doctor_company_address: data.doctor_company_address,
        })),
      };

      // Make sure axiosInterceptor is correctly imported and configured
      await updateProfileExperience(doctorId, apiData);

      // Ensure getAllDoctors returns a promise and resolves with the doctor data
      const doctorData = await getAllDoctors(doctorId);

      if (Array.isArray(doctorData.experience)) {
        const formattedData = doctorData.experience.map((experience) => ({
          doctor_company: experience.doctor_company || "",
          doctor_title: experience.doctor_title || "",
          doctor_start_date: experience.doctor_start_date || "",
          doctor_end_date: experience.doctor_end_date || "",
          doctor_company_address: experience.doctor_company_address || "",
        }));

        setFormData(formattedData);
      }

      // Close the modal or perform other actions as needed
      setShowProfileModal(false);
    } catch (error) {
      console.error("Error updating experience:", error);
      // Handle the error, display a message to the user, etc.
    }
  };

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const doctorId = "1"; // Replace with the actual doctor's ID

        // Ensure getAllDoctors returns a promise and resolves with the doctor data
        const doctorData = await getAllDoctors(doctorId);

        if (Array.isArray(doctorData.experience)) {
          const formattedData = doctorData.experience.map((experience) => ({
            doctor_company: experience.doctor_company || "",
            doctor_title: experience.doctor_title || "",
            doctor_start_date: experience.doctor_start_date || "",
            doctor_end_date: experience.doctor_end_date || "",
            doctor_company_address: experience.doctor_company_address || "",
          }));

          setFormData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        // Handle the error, display a message to the user, etc.
      }
    };

    fetchDoctorData(); // Invoke the function to fetch data when the component mounts
  }, []);

  return (
    <Layouts>
      <div className="pengalaman">
        <div className="container justify-content-center">
          <BackButton location={"/dokter/profile"} />
          {formData.map((data, index) => (
            <form className="pengalaman-form" key={index}>
              <h4 className="pengalaman-title">Pengalaman Kerja</h4>
              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`doctor_company${index}`}>Nama Perusahaan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_company ? "is-invalid" : ""}`}
                    id={`doctor_company${index}`}
                    name="doctor_company"
                    placeholder="Nama Perusahaan"
                    value={data.doctor_company}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_company && (
                    <div className="invalid-feedback">{errorMessages.doctor_company}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`doctor_title${index}`}>Jabatan di Perusahaan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_title ? "is-invalid" : ""}`}
                    id={`doctor_title${index}`}
                    name="doctor_title"
                    placeholder="Jabatan"
                    value={data.doctor_title}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_title && (
                    <div className="invalid-feedback">{errorMessages.doctor_title}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <Label htmlFor={`doctor_start_date${index}`}>Awal Bekerja</Label>
                  <Input
                    type="date"
                    className={`form-control mb-2 ${errorMessages.doctor_start_date ? "is-invalid" : ""}`}
                    id={`doctor_start_date${index}`}
                    name="doctor_start_date"
                    placeholder="Tahun Masuk"
                    value={data.doctor_start_date}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_start_date && (
                    <div className="invalid-feedback">{errorMessages.doctor_start_date}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <Label htmlFor={`doctor_end_date${index}`}>Akhir Bekerja</Label>
                  <Input
                    type="date"
                    className={`form-control mb-2 ${errorMessages.doctor_end_date ? "is-invalid" : ""}`}
                    id={`doctor_end_date${index}`}
                    name="doctor_end_date"
                    placeholder="Tahun Keluar"
                    value={data.doctor_end_date}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_end_date && (
                    <div className="invalid-feedback">{errorMessages.doctor_end_date}</div>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="input-alamat-perusahaan">
                  <Label htmlFor={`doctor_company_address${index}`}>Alamat Perusahaan</Label>
                  <Input
                    type="text"
                    className={`form-control mb-2 ${errorMessages.doctor_company_address ? "is-invalid" : ""}`}
                    id={`doctor_company_address${index}`}
                    name="doctor_company_address"
                    placeholder="Alamat"
                    value={data.doctor_company_address}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  {errorMessages.doctor_company_address && (
                    <div className="invalid-feedback">{errorMessages.doctor_company_address}</div>
                  )}
                </div>
              </div>
            </form>
          ))}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Dengan ini saya menyetujui <NavLink to={'/dokter/pengalaman/privacy-policy'} className="privacyPolicy">Kebijakan Privasi</NavLink> dari EmpathiCare
            </label>
          </div>

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
            onSubmit={handleUpdateProfileExperience}
          />
        </div>
      </div>
    </Layouts>
  );
};

export default Pengalaman;