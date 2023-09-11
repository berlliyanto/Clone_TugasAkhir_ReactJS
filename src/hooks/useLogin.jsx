import { useState } from "react";
import { useEffect } from "react"
import jwt_decode from "jwt-decode";

export const useLogin = (navigate) => {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth) {
            const decoded = jwt_decode(auth.token);
            const isTokenExpired = decoded.exp < Date.now() / 1000;
            if (isTokenExpired) {
                console.log("Token telah kedaluwarsa");
                setIsAuth(false);
                navigate('/login');
            } else {
                console.log("Token masih berlaku");
                setIsAuth(true);
            }
        }else{
            setIsAuth(false);
            navigate('/login');
        }

    }, [])
    return isAuth;

}

// Uji Nanti
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYmVybGkiLCJpYXQiOjE2OTQzMzQyNzQsImV4cCI6MTY5NDM0MTQ3NH0.td8WOcBWNITihUprASs6c7nhuXDo3085K0O1Ez1RCRY