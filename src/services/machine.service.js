import axios from "axios";

export async function pressureGauge(params, callback){
    const url = "https://berli.aplikasipms.com/api/pressureGauge";
    const { token } = params;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }

    try {
        const response = await axios.get(url, {
            headers: headers
        });
        callback(response);
    } catch (error) {
        callback(error.response);
    }
}

export async function energyConsumption(params, callback) {
    const url = "https://berli.aplikasipms.com/api/latestEnergy";
    const { token } = params;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }
    try {
        const response = await axios.get(url, {
            headers: headers
        });
        callback(response);
    } catch (error) {
        callback(error.response);
    }
}

export async function getOEEMachine(params, callback){
    const {token , id} = params;
    const url = `https://berli.aplikasipms.com/api/getOEE?machine_id=${id}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }

    try{
        const response = await axios.get(url, {
            headers: headers
        })
        callback(response);
    } catch (error) {
        callback(error.response)
    }
}

export async function getParameterMachine(params, callback) {
    const {token , id} = params;
    const url = `https://berli.aplikasipms.com/api/latestParamM${id}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }

    try{
        const response = await axios.get(url, {
            headers: headers
        })
        callback(response);
    } catch (error) {
        callback(error.response)
    }
}

export async function getProductionMachine(params, callback) {
    const {token , id, tipe} = params;
    const url = `https://berli.aplikasipms.com/api/getQualityData?m_id=${id}&tipe=${tipe}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }

    try{
        const response = await axios.get(url, {
            headers: headers
        })
        callback(response);
    } catch (error) {
        callback(error.response)
    }
}

export async function getProductionTimeMachine(params, callback) {
    const {token , id} = params;
    const url = `https://berli.aplikasipms.com/api/latestAvailability?machine_id=${id}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }

    try{
        const response = await axios.get(url, {
            headers: headers
        })
        callback(response);
    } catch (error) {
        callback(error.response)
    }
}

export async function getLifeTimeMachine(params, callback) {
    const {token , id} = params;
    const url = `https://berli.aplikasipms.com/api/getOneLT?machine_id=${id}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + token
    }

    try{
        const response = await axios.get(url, {
            headers: headers
        })
        callback(response);
    } catch (error) {
        callback(error.response)
    }
}