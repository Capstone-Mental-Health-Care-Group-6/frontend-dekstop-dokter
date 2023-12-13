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

export const createProfileDoctor = async (formData, callback) => {
    await axiosInterceptor.post('/doctor/register', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
        .then((res) => {
            callback(true, res.data);
        })
        .catch((err) => {
            console.log(err);
            callback(false, err.message);
        });
};

