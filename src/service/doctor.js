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
    const dataDoctor2 = context.dataDoctor[1];
    const dataDoctor3 = context.dataDoctor[2];
    const dataDoctor4 = context.dataDoctor[3];

    console.log('ini isi semua form doctor', dataDoctor, dataDoctor2, dataDoctor3, dataDoctor4)

      const mergedData = {
        ...formData,
        dataDoctor: { ...dataDoctor }, // Preserve the original dataDoctor
      };
  
      console.log('ini merged data', mergedData)

      console.log('ini isi merged data', mergedData.dataDoctor)

      await axiosInterceptor.post('/doctor/register', mergedData, {
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
        console.log(res.data); // Log the successful response
    } catch (error) {
        console.error("Error updating experience:", error);
        throw error; // Rethrow the error to be caught by the calling code
    }
};

