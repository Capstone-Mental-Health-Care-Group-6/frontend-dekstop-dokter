import axios from "axios";
const url = process.env.BASE_API;
import { jwtDecode } from "jwt-decode";

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


export const resetPassword = (id, formResetPass, callback) => {
  axios.post(`${url}/reset-password?token_reset_password=${id}`, formResetPass)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
      console.log(err);
    });
}

export const getIdDoctor = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.id;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};


