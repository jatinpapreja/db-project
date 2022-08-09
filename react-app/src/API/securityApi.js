import server from './server';

export async function getSecurities() {
   const response =  await server.get('/api/v1/Security');
   return response.data;
}

// export async function checkSecurityInAction() {
//     const response = await axios.get(url);
//     return response.data;
// }


// export async function createSecurity(data) {
//     const response = await axios.post(url,data);
//     return response.data;
// }

export async function deleteSecurity(securityId) {
    const response = await server.delete(`api/v1/Security/${securityId}`);
   //  return response.data;
}

// export async function updateSecurity(data) {
//     const response = await axios.put(url,data);
//     return response.data;
// }