import { axiosInterceptor } from "./axiosInterceptors";

export const createArticle = (formArticle, callback) => {
    axiosInterceptor.post(`/articles`, formArticle)
        .then((res) => {
            callback(res.data);
        }).catch((err) => {
            callback(err)
        })
}

export const getAllArticle = (callback) => {
    axiosInterceptor.get('/articles')
        .then((res) => {
            callback(res.data)
        }).catch((err) => {
            console.log(err);
        });
}