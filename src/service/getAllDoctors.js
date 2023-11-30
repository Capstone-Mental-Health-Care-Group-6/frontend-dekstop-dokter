// ini hanya sintak perumpamaan nya saja ya, nanti samakan lagi sesuai apa yang di BE
// sintak ini hanya contoh boleh di hapus atau di pakai dan ubah
// tidak menggunakan url dari env karena sudah di setting di axiosInterceptor jadi tinggal endpoint nya saja

import { axiosInterceptor } from "./axiosInterceptors";

export const getAllDoctors = (callback) => {
    axiosInterceptor.get(`/doktors`)
        .then((res) => {
            callback(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            console.error("Error fetching courses:", error);
        });
}

