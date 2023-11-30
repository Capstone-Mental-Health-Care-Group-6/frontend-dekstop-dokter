import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const getUsername = (token) => {
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.data.name;
};

export const useLogin = () => {
    const navigate = useNavigate();

    const [userName, setUsername] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUsername(getUsername(token));
        } else {
            navigate('/');
        }
    }, []);

    return userName;
};

// pemanggilan nya cukup import useLogin dan panggilnya seperti ini useLogin()
