import axios from "axios";


const urlProduct = "https://berli.aplikasipms.com/api/dashboardQuality";
const urlOEE = "https://berli.aplikasipms.com/api/getdashOEE";
const urlStatus = "https://berli.aplikasipms.com/api/getStatus";
const urlEnergy = "https://berli.aplikasipms.com/api//grafikEnergy";

export async function getProductHome(params,callback){
    const token = params.token;
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }
    try {
        const response = await axios.get(urlProduct, {
            headers: headers
        });
        callback(response);
    } catch (error) {
        callback(error.response)
    }
}

export async function getMachineStatus(params, callback){
    const {token} = params;
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }

    try {
        const response = await axios.get(urlStatus, {
            headers: headers
        });
        callback(response);
    } catch (error) {
        callback(error.response);
    }
}

export async function getEnergy(params, callback){
    const {token} = params;
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }
    try {
        const response = await axios.get(urlEnergy, {
            headers: headers
        });
        callback(response);
    } catch (error) {
        callback(error.response);
    }
}

export async function getOEE(params, callback){
    const {token} = params;
    const headers = {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }
    try {
        const response = await axios.get(urlOEE, {
            headers: headers
        });
        callback(response);
    } catch (error) {
        callback(error.response);
    }
}