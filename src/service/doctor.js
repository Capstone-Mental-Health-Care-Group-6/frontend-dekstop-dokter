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

export const createProfileDoctor = async (formData, context, callback) => {
    try {
    const dataDoctor = context.dataDoctor[0];
    // const dataDoctor2 = context.dataDoctor[1];
    // const dataDoctor3 = context.dataDoctor[2];
    // const dataDoctor4 = context.dataDoctor[3];

    console.log('ini isi semua form doctor', dataDoctor)

      const mergedData = {
        ...formData,
        dataDoctor: { ...dataDoctor }, 
      };
  
      console.log('ini merged data', mergedData)

      console.log('ini isi merged data', mergedData.dataDoctor)
      const formDataNow = new FormData();
      var currentDate = new Date();
      var isoDateString = currentDate.toISOString();
      formDataNow.append("doctor_name", dataDoctor.doctor_name);
      formDataNow.append("doctor_nik", dataDoctor.doctor_nik);
      formDataNow.append("doctor_dob", dataDoctor.doctor_dob);
      formDataNow.append("doctor_gender", "perempuan");
      formDataNow.append("doctor_description", dataDoctor.doctor_description);
      formDataNow.append("doctor_provinsi", dataDoctor.doctor_provinsi);
      formDataNow.append("doctor_kota", dataDoctor.doctor_kota);
      formDataNow.append("doctor_number_phone", dataDoctor.doctor_number_phone);
      formDataNow.append("doctor_sipp", dataDoctor.doctor_sipp);
      formDataNow.append("doctor_str", dataDoctor.doctor_str);
      formDataNow.append("expertise_id", 1);
      formDataNow.append("doctor_avatar", dataDoctor.doctor_avatar);
      formDataNow.append("doctor_university", "ini univ doctor");
      formDataNow.append("doctor_study_program", "ini prodi doctor");
      formDataNow.append("doctor_enroll_year", isoDateString);
      formDataNow.append("doctor_graduate_year", isoDateString);
      formDataNow.append("doctor_cv", dataDoctor.doctor_avatar);
      formDataNow.append("doctor_sipp_file", dataDoctor.doctor_avatar);
      formDataNow.append("doctor_ijazah",dataDoctor.doctor_avatar);
      formDataNow.append("doctor_str_file",dataDoctor.doctor_avatar);
      formDataNow.append("workday_id", 1);
      formDataNow.append("start_time", isoDateString);
      formDataNow.append("end_time", isoDateString);
      formDataNow.append("doctor_company", "PT Doctor");
      formDataNow.append("doctor_title", "direktur");
      formDataNow.append("doctor_company_address", "jl oke gan");
      formDataNow.append("doctor_start_date", isoDateString);
      formDataNow.append("doctor_end_date", isoDateString);

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

