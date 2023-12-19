const initialState = {
    educationData: [
      {
        doctor_university: "",
        doctor_study_program: "",
        doctor_enroll_year: "",
        doctor_graduate_year: "",
      },
    ],
  };
  
  const educationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EDUCATION_DATA':
        return {
          ...state,
          educationData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default educationReducer;
  