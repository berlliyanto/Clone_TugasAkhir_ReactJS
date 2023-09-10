import axios from "axios";


const urlProduct = "https://berli.aplikasipms.com/api/dashboardQuality";
const urlOEE = "https://berli.aplikasipms.com/api/getdashOEE";

export async function getProductHome(params,callback){
    const token = params.token;
    const headers = {
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