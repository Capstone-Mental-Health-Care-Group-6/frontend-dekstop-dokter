import React, { useState } from 'react';
import { MyContextProvider } from '../../context/ProfileDoctorContext';import RegisDataPribadi from '../RegisDataPribadi/RegisDataPribadi';
import RegisDataAkademik from '../RegisDataAkademik/RegisDataAkademik';
import RegisDokumen from '../RegisDokumen/RegisDokumen';
import RegisPengalaman from '../RegisPengalaman/RegisPengalaman';
import RegisProfilSingkat from '../RegisProfilSingkat/RegisProfilSingkat';
import { createProfileDoctor, getAllDoctors } from '../../service/doctor';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const formDataKeys = ['doctor_avatar', 'doctor_name', 'email', 'doctor_nik', 'doctor_number_phone', 'doctor_dob', 'doctor_provinsi', 'doctor_gender', 'doctor_kota', 'doctor_str', 'doctor_sipp', 'doctor_university', 'doctor_study_program', 'doctor_enroll_year', 'doctor_graduate_year', 'doctor_cv', 'doctor_sipp_file', 'doctor_ijazah', 'doctor_str_file', 'doctor_company', 'doctor_title', 'doctor_start_date', 'doctor_end_date', 'doctor_company_address', 'doctor_expertise', 'doctor_description', 'workday_id', 'start_time', 'end_time'];

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const apiData = new FormData();
    
    for (const key of formDataKeys) {
      try {
        if (key === 'doctor_avatar' && formData.hasOwnProperty(key)) {
          const base64Data = formData['doctor_avatar'];          
          const blob = await (await fetch(`data:image/png;base64,${base64Data}`)).blob();
          apiData.append(key, blob, 'avatar.png');
        } else if (key !== 'email' && formData.hasOwnProperty(key)) {
          apiData.append(key, formData[key]);
        }
      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    }
  
    await createProfileDoctor(apiData, (status, res) => {
      if (status) {
        console.log(res);
        getAllDoctors((res) => {
          setFormData(res.data);
        });
      } else {
        console.error('Error creating profile:', res);
      }
    });
  };  

  
  return (
    <MyContextProvider>
      {step === 1 && <RegisDataPribadi onNext={() => setStep(2)} />}
      {step === 2 && <RegisDataAkademik onNext={() => setStep(3)} />}
      {step === 3 && <RegisDokumen onNext={() => setStep(4)} />}
      {step === 4 && <RegisPengalaman onNext={() => setStep(5)} />}
      {step === 5 && <RegisProfilSingkat onSubmit={(e) => handleSubmit(e)} />}
    </MyContextProvider>
  );
};

export default RegistrationForm