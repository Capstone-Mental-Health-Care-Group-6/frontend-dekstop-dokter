import { useState, useEffect } from "react";
import { getIdFromToken } from "../service/auth.doctor";

export const useDoctorId = () => {
    const [userDoctor, setUserDoctor] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUserDoctor(getIdFromToken(token));
        } else {
            window.location.href = '/login';
        }
    }, []);

    return userDoctor;
};