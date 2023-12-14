import axios from "axios";
const url = process.env.BASE_API;

export const login = (formLogin, callback) => {
  axios
    .post(`${url}/login`, formLogin)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};


export const getByNameLoginDoctor = (callback, params) => {
  axios
    .post(`${url}/login`, params)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const register = (formRegister, callback) => {
  axios
    .post(`${url}/register`, formRegister)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const forgetPassword = (formForgetPass, callback) => {
  axios
    .post(`${url}/forget-password`, formForgetPass)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const resetPassword = (id, formResetPass) => {
  axios
    .post(`${url}/reset-password?token_reset_password=${id}`, formResetPass)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
