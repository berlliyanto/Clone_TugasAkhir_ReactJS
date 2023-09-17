import axios from "axios";

const urlLogin = "https://berli.aplikasipms.com/api/login";
const urlRegister = "https://berli.aplikasipms.com/api/register";

export async function login(params,callback){
    const data = {
        username: params.username,
        password: params.password,
    }

    try {
        callback(false);
        const response = await axios.post(urlLogin,data, {
            headers: {
            }
        });
        callback(response);
    } catch (error) {
        callback(error.response);
    }
}

export async function register(params, callback){
    const data = {
        name: params.name,
        username: params.username,
        password: params.password,
        otoritas: params.otoritas,
    }

    try {
        callback(false);
        const response = await axios.post(urlRegister,data, {
            headers: {
            }
        });
        callback(response);
    } catch (error) {
        callback(error.response);
    }
}