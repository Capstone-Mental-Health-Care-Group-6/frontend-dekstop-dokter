import axios from 'axios';
const url = process.env.BASE_API;
const token = localStorage.getItem('token');
export const axiosInterceptor = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
    },
});

//  jadi ketika ada request yang membutuhkan Authorization maka penggunaan fetching nya seperti ini :
// axiosInterceptor.get('/endpointKalian')
// sebagai contoh di getAllDoctors.js
// jika tidak membutuhkan Authorization maka gunakan fetching axios yang biasa saja
// karena jika request nya tidak butuh Authorization akan error