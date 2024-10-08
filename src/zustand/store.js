import { create } from 'zustand'

const useStore = create((set) => ({
    // Definisikan state global di sini
    formDoctor: {
        doctor_name: "",
        email: "",
        doctor_nik: "",
        doctor_number_phone: "",
        doctor_dob: "",
        doctor_provinsi: "",
        doctor_gender: "",
        doctor_kota: "",
        doctor_str: "",
        doctor_sipp: "",
        doctor_avatar: "",
        academic_data: [
            {
              doctor_university: "",
              doctor_study_program: "",
              doctor_enroll_year: "",
              doctor_graduate_year: "",
            }
          ],
        dokumen_data: [
            {
              doctor_cv: "",
              doctor_sipp_file: "",
              doctor_ijazah: "",
              doctor_str_file: "",
            }
        ],
        experience_data: [
            {
              doctor_company: "",
              doctor_title: "",
              doctor_start_date: "",
              doctor_end_date: "",
              doctor_company_address: "",
            }
        ],
        profile_singkat_data: [
            {
              expertise_id: "",
              doctor_description: "",
              workday_id: "",
              start_time: "",
              end_time: "",
            }
        ]

    },
    SetFormDoctor: (newData) => set((state) => ({ formDoctor: { ...state.formDoctor, ...newData } })),
}));


export default useStore;
