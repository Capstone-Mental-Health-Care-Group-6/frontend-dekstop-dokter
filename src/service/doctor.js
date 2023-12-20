import { axiosInterceptor } from "./axiosInterceptors";
const url = process.env.BASE_API

export const getAllDoctors = (callback) => {
    axiosInterceptor.get(`${url}/doctor`)
        .then((res) => {
            callback(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            console.error("Error fetching all doctor:", error);
        });
}

export const DetailDoctor = (id, callback) => {
    axiosInterceptor.get(`${url}/doctor/${id}`)

        .then((res) => {
            callback((res.data))
        }).catch((err) => {
            console.log(err);
        });
}

export const createProfileDoctor = async (formDoctor, callback) => {
    console.log("ini form doctor :", formDoctor);
    try {
      const formDataNow = new FormData();
      formDataNow.append("doctor_name", formDoctor.doctor_name);
      formDataNow.append("doctor_nik", formDoctor.doctor_nik);
      formDataNow.append("doctor_dob", formDoctor.doctor_dob);
      formDataNow.append("doctor_gender", formDoctor.doctor_dob);
      formDataNow.append("doctor_description", formDoctor.profile_singkat_data.doctor_description);
      formDataNow.append("doctor_provinsi", formDoctor.doctor_provinsi);
      formDataNow.append("doctor_kota", formDoctor.doctor_kota);
      formDataNow.append("doctor_number_phone", formDoctor.doctor_number_phone);
      formDataNow.append("doctor_sipp", formDoctor.doctor_sipp);
      formDataNow.append("doctor_str", formDoctor.doctor_str);
      formDataNow.append("expertise_id", formDoctor.profile_singkat_data.doctor_dob);
      formDataNow.append("doctor_avatar", formDoctor.doctor_avatar);
      formDataNow.append("doctor_university", formDoctor.academic_data.doctor_university);
      formDataNow.append("doctor_study_program", formDoctor.academic_data.doctor_study_program);
      formDataNow.append("doctor_enroll_year", formDoctor.academic_data.doctor_enroll_year);
      formDataNow.append("doctor_graduate_year", formDoctor.academic_data.doctor_graduate_year);
      formDataNow.append("doctor_cv", formDoctor.dokumen_data.doctor_cv);
      formDataNow.append("doctor_sipp_file", formDoctor.dokumen_data.doctor_sipp_file);
      formDataNow.append("doctor_ijazah",formDoctor.dokumen_data.doctor_ijazah);
      formDataNow.append("doctor_str_file",formDoctor.dokumen_data.doctor_str_file);
      formDataNow.append("workday_id", formDoctor.profile_singkat_data.workday_id);
      formDataNow.append("start_time", formDoctor.profile_singkat_data.start_time);
      formDataNow.append("end_time", formDoctor.profile_singkat_data.end_time);
      formDataNow.append("doctor_company", formDoctor.experience_data.doctor_company);
      formDataNow.append("doctor_title", formDoctor.experience_data.doctor_title);
      formDataNow.append("doctor_company_address", formDoctor.experience_data.doctor_company_address);
      formDataNow.append("doctor_start_date", formDoctor.experience_data.doctor_start_date);
      formDataNow.append("doctor_end_date", formDoctor.experience_data.doctor_end_date);

      await axiosInterceptor.post('/doctor/register', formDataNow, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((res) => {
          console.log('Response:', res);
  
          callback(true, res.data);
        })
        .catch((err) => {
          console.log('Error Response:', err.response);
  
          callback(false, err.message);
        });
    } catch (error) {
      console.error('Unexpected Error:', error);
      callback(false, error.message);
    }
  };  

export const updateProfileDataPokok = async (id, formData) => {
    await axiosInterceptor.put(`/doctor/datapokok/${id}`, formData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const updateProfileWorkday = async (id, formData) => {
    await axiosInterceptor.put(`/doctor/workday/${id}`, formData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const updateProfileEducation = async (id, formData) => {
    await axiosInterceptor.put(`/doctor/education/${id}`, formData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const updateProfileExperience = async (id, formData) => {
    try {
        const res = await axiosInterceptor.put(`/doctor/experience/${id}`, formData);
        console.log(res.data); 
    } catch (error) {
        console.error("Error updating experience:", error);
        throw error; 
    }
};

