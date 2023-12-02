import axios from 'axios';
const url = process.env.BASE_API;
const token = localStorage.getItem('token');
export const axiosInterceptor = axios.create({
    baseURL: url,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': token,
    },
});

//  jadi ketika ada request yang membutuhkan X-API-Key maka penggunaan fetching nya seperti ini :
// axiosInterceptor.get('/endpointKalian')
// sebagai contoh di getAllDoctors.js
// jika tidak membutuhkan X-API-Key maka gunakan fetching axios yang biasa saja
// karena jika request nya tidak butuh X-API-Key akan error