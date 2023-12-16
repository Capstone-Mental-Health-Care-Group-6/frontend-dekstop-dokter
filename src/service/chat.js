import axios from "axios";
import { axiosInterceptor } from "./axiosInterceptors";
const url = process.env.BASE_API

export const getAllChat = (id, callback) => {
    axiosInterceptor.get(`/api/chats/users/${id}`)
        .then((res) => {
            callback(res.data)
            console.log(res.data);
        })
        .then((err) => {
            console.log(err);
        })
}


export const postChat = (formChat, callback) => {
    axios.post(`${url}/chat`, formChat)
        .then((res) => {
            callback(res.data)
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getChat = (callback) => {
    axios.get(`${url}/chat`)
        .then((res) => {
            callback(res.data)
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const deleteChat = (id, callback) => {
    axios.delete(`${url}/chat/${id}`)
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
}

