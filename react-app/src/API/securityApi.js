import axios from 'axios'

export async function getSecurities() {
   const response =  await axios.get(url);
   return response.data;
}

export async function checkSecurityInAction() {
    const response = await axios.get(url);
    return response.data;
}


export async function createSecurity(data) {
    const response = await axios.post(url,data);
    return response.data;
}

export async function deleteSecurity(data) {
    const response = await axios.delete(url,data);
    return response.data;
}

export async function updateSecurity(data) {
    const response = await axios.put(url,data);
    return response.data;
}