import axios from "axios";
import { axiosInterceptor } from "./axiosInterceptors";
const url = process.env.API_LIST_PASIEN;

export const getAllListPasien = (callback) => {
  axiosInterceptor
    .get(`${url}/listPasien`)
    .then((res) => {
      callback(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deletePatient = (id) => {
  return axiosInterceptor.delete(`${url}/listPasien/${id}`);
};
