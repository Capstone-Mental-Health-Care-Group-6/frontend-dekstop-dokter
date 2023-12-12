import { axiosInterceptor } from "./axiosInterceptors";

const url = process.env.BASE_API;

export const getAllCounseling = (callback) => {
  axiosInterceptor
    .get(`${url}/counseling`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
