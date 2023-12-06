import axios from "axios";
import { axiosInterceptor } from "./axiosInterceptors";

export const withdraw = (formWithdraw, callback) => {
  axiosInterceptor
    .post(`/withdraw`, formWithdraw)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
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
