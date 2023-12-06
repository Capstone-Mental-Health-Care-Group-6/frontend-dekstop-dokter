import axios from "axios";
const url = process.env.BASE_API

export const login = (formLogin, callback) => {
    axios.post(`${url}/login`, formLogin)
        .then((res) => {
            callback(true, res.data);
        }).catch((err) => {
            callback(false, err)
        })
}


export const register = (formRegister, callback) => {
    axios.post(`${url}/register`, formRegister)
        .then((res) => {
            callback(true, res.data);
        }).catch((err) => {
            callback(false, err);
        });
};