import axios from "axios";
import { axiosInterceptor } from "./axiosInterceptors";

export const withdraw = (formWithdraw) => {
  return axiosInterceptor.post(`/withdraw`, formWithdraw)
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const withdrawDoctor = (callback) => {
  axiosInterceptor
    .get(`/doctor/withdraw`)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const saldoTarik = (id, callback) => {
  axiosInterceptor
    .get(`/doctor/user/${id}`)
    .then((res) => {
      callback(res.data);
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
};

export const allDataTransaction = (callback) => {
  axios
    .get(`/transaction`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const detailTransaction = (id, callback) => {
  axiosInterceptor
    .get(`/transaction/${id}`)
    .then((res) => {
      callback(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
