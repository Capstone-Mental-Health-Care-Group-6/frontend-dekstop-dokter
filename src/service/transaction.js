import axios from "axios";
import { axiosInterceptor } from "./axiosInterceptors";

// export const withdraw = (formWithdraw, callback) => {
//   axiosInterceptor
//     .post(`/withdraw`, formWithdraw)
//     .then((res) => {
//       callback(res.data);
//     })
//     .catch((err) => {
//       callback(err);
//     });
// };
export const withdraw = (formWithdraw) => {
  return axiosInterceptor.post(`/withdraw`, formWithdraw)
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};


// export const withdraw = async (withdrawData) => {
//   try {
//     const response = await axiosInterceptor.post('/withdraw', withdrawData);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

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
