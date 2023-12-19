const initialState = {
    formData: {
      doctor_name: "",
      email: "",
      doctor_nik: "",
      doctor_number_phone: "",
      doctor_dob: "",
      doctor_provinsi: "",
      doctor_gender: "",
      doctor_kota: "",
      doctor_str: "",
      doctor_sipp: "",
      doctor_avatar: null,
    },
    educationData: [
      {
        doctor_university: "",
        doctor_study_program: "",
        doctor_enroll_year: "",
        doctor_graduate_year: "",
      },
    ],
  };
  
  const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_REGISTRATION_DATA':
        return {
          ...state,
          formData: action.payload,
        };
      case 'SET_EDUCATION_DATA':
        return {
          ...state,
          educationData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default registrationReducer;
  