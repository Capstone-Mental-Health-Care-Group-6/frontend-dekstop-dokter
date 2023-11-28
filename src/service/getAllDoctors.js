// url berisi dari env cuman env nya belum di seting 
// ini hanya sintak perumpamaan nya saja ya, nanti samakan lagi sesuai apa yang di BE
// sintak ini hanya contoh boleh di hapus atau di pakai dan ubah


import { axiosInterceptor } from "./axiosInterceptors";
const url = process.env.BASE_API;
axiosInterceptor.get(`${url}/patients`)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        if (error.code === 'ECONNABORTED') {
            console.error('Error: Timeout exceeded');
        } else {
            console.error('Error:', error);
        }
    });