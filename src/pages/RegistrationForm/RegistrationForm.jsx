import React, { useState } from 'react';
import { MyContextProvider } from '../../context/ProfileDoctorContext';
import RegisDataPribadi from '../RegisDataPribadi/RegisDataPribadi';
import RegisDataAkademik from '../RegisDataAkademik/RegisDataAkademik';
import RegisDokumen from '../RegisDokumen/RegisDokumen';
import RegisPengalaman from '../RegisPengalaman/RegisPengalaman';
import RegisProfilSingkat from '../RegisProfilSingkat/RegisProfilSingkat';
import { createProfileDoctor, getAllDoctors } from '../../service/doctor';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const formDataKeys = ['doctor_avatar', 'doctor_name', 'email', 'doctor_nik', 'doctor_number_phone', 'doctor_dob', 'doctor_provinsi', 'doctor_gender', 'doctor_kota', 'doctor_str', 'doctor_sipp', 'doctor_university', 'doctor_study_program', 'doctor_enroll_year', 'doctor_graduate_year', 'doctor_cv', 'doctor_sipp_file', 'doctor_ijazah', 'doctor_str_file', 'doctor_company', 'doctor_title', 'doctor_start_date', 'doctor_end_date', 'doctor_company_address', 'doctor_expertise', 'doctor_description', 'workday_id', 'start_time', 'end_time'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiData = new FormData();

    const combinedFormData = {};
    for (const key of formDataKeys) {
      try {
        if (formData['doctor_avatar']) {
          console.log('ini sudah sampai sini')
          apiData.append('doctor_avatar', 'testing');
        } else if (key !== 'email' && formData.hasOwnProperty(key)) {
          apiData.append(key, formData[key]);
          combinedFormData[key] = formData[key];
        }

        console.log('Request Payload:', mergedData);

      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    }

    const dataArray = [combinedFormData];

    await createProfileDoctor(apiData, (status, res) => {
      if (status) {
        console.log(res);
        getAllDoctors((res) => {
          console.log(dataArray);
          setStep(6);
        });
      } else {
        console.error('Error creating profile:', res);
      }
    });
  };

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <MyContextProvider>
      {step === 1 && <RegisDataPribadi onNext={() => setStep(2)} onChange={handleInputChange} />}
      {step === 2 && <RegisDataAkademik onNext={() => setStep(3)} onChange={handleInputChange} />}
      {step === 3 && <RegisDokumen onNext={() => setStep(4)} onChange={handleInputChange} />}
      {step === 4 && <RegisPengalaman onNext={() => setStep(5)} onChange={handleInputChange} />}
      {step === 5 && <RegisProfilSingkat onSubmit={(e) => handleSubmit(e)} onChange={handleInputChange} />}
    </MyContextProvider>
  );
};

export default RegistrationForm;
