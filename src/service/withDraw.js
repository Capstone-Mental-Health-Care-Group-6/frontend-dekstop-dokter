import { axiosInterceptor } from "./axiosInterceptors";

export const withdraw = (formWithdraw, callback) => {
    axiosInterceptor.post(`/withdraw`, formWithdraw)
        .then((res) => {
            callback(res.data);
        }).catch((err) => {
            callback(err)
        })
}