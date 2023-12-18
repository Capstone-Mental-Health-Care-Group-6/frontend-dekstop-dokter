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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const apiData = new FormData();
  
    formDataArray.forEach((data) => {
      for (const key in data) {
        if (key !== 'email') {
          apiData.append(key, data[key]);
        }
      }
    });
  
    await createProfileDoctor(apiData, (status, res) => {
      if (status) {
        console.log(res);
        getAllDoctors((res) => {
          console.log(formDataArray);
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
