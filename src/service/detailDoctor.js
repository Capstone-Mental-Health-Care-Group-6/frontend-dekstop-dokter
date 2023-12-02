import { axiosInterceptor } from "./axiosInterceptors";
const url = process.env.BASE_API
export const DetailDoctor = (id, callback) => {
    axiosInterceptor.get(`${url}/patients/${id}`)

        .then((res) => {
            callback((res.data))
        }).catch((err) => {
            console.log(err);
        });

}