
import { useRef } from "react";
import Button from "../Elements/Button/Button";
import Divider from "../Elements/Divider/Divider";
import InputLabel from "../Elements/Input/Input-Label";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserError, loginUserSuccess } from "../../redux/slices/authSlice";
import { login } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const FormLogin = (props) => {
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const errorMessage = useRef(null);
    const [loadingLogin, setLoadingLogin] = useState(true);

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        login(data, (response) => {
            if (response == false) {
                setLoadingLogin(false);
            } else {
                setLoadingLogin(true);
                if (response.status != 200) {
                    dispatch(loginUserError(response.data.message));
                    errorMessage.current.style.opacity = 1;
                    setTimeout(() => {
                        errorMessage.current.style.opacity = 0;
                    }, 5000);
                } else {
                    const authorization = {
                        name: response.data.data.name,
                        otoritas: response.data.data.otoritas,
                        token: response.data.data.token,
                    };
                    localStorage.setItem('auth', JSON.stringify(authorization));
                    dispatch(loginUserSuccess(authorization));
                    navigate('/home')
                }
            }
        })
    }

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    return (

        <form className="form-validate" onSubmit={handleLogin}>
            <InputLabel ref={usernameRef} name="username" placeHolder="Input Username" type="text" label="Username" />
            <InputLabel name="password" placeHolder="*****" type="password" label="Password" />
            <div className="error" ref={errorMessage}>Username Atau Password Salah!!!</div>
            <Divider top="15px" bottom="0px" />
            <Button type="submit" buttonStyle={"button-cyan"} textButton={loadingLogin? "Login" : "Loading..."} />
        </form>
    )
}

export default FormLogin;