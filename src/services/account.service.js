import axios from 'axios';

const urlUser = "https://berli.aplikasipms.com/api/users/";

export async function getUsers(params, callback) {
    const { token } = params;
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }
    try {
        callback(false);
        const response = await axios.get(urlUser, {
            headers: headers
        });
        callback(response);
    } catch (error) {
        callback(error.response);
    }
}

export async function getUser(params, callback) {
    const { token, id } = params;
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }
    try {
        callback(false);
        const response = await axios.get(urlUser + id, {
            headers: headers
        });
        callback(response);
    } catch (error) {
        callback(error.response);
    }
}

export async function deleteUser(params, callback) {
    const { token , id } = params;
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }

    try {
        callback(false);
        const response = await axios.delete(urlUser + id, {
            timeout: 10000,
            headers: headers 
        });
        callback(response);
        console.log(response);
    } catch (error) {
        if (axios.isCancel(error)) {
            callback(error.message);
        } else if (error.code === 'ECONNABORTED') {
            callback(error.message);
        } else {
            callback(error.response);
        }
    }
}

export async function updateUser(params, callback) {
    const { token , id, name, username, password, otoritas } = params;
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    };

    const data = {
        name: name,
        username: username,
        password: password,
        otoritas: otoritas
    };

    try {
        callback(false);
        const response = await axios.put(urlUser + id, data, {
            timeout: 10000,
            headers: headers, 
        });
        callback(response);
        console.log(response);
    } catch (error) {
        if (axios.isCancel(error)) {
            callback(error.message);
        } else if (error.code === 'ECONNABORTED') {
            callback(error.message);
        } else {
            callback(error.response);
        }
    }
}