import { axiosInterceptor } from "./axiosInterceptors";
const url = process.env.BASE_API



export const getAllDoctors = (callback) => {
    axiosInterceptor.get(`${url}/patients`)
        .then((res) => {
            callback(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            console.error("Error fetching all doctor:", error);
        });
}

export const DetailDoctor = (id, callback) => {
    axiosInterceptor.get(`${url}/patients/${id}`)

        .then((res) => {
            callback((res.data))
        }).catch((err) => {
            console.log(err);
        });

}