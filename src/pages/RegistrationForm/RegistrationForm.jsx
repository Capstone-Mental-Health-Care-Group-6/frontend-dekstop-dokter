import React, { useState } from 'react';
import RegisDataPribadi from '../RegisDataPribadi/RegisDataPribadi';
import RegisDataAkademik from '../RegisDataAkademik/RegisDataAkademik';
import RegisDokumen from '../RegisDokumen/RegisDokumen';
import RegisPengalaman from '../RegisPengalaman/RegisPengalaman';
import RegisProfilSingkat from '../RegisProfilSingkat/RegisProfilSingkat';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div>
      {step === 1 && <RegisDataPribadi onNext={() => setStep(2)} />}
      {step === 2 && <RegisDataAkademik onNext={() => setStep(3)} />}
      {step === 3 && <RegisDokumen onNext={() => setStep(4)} />}
      {step === 4 && <RegisPengalaman onNext={() => setStep(5)} />}
      {step === 5 && <RegisProfilSingkat onSubmit={(e) => handleSubmit(e)} />}
    </div>
  );
};

export default RegistrationForm;
