import server from './server';

export async function getSecurities() {
   const response =  await server.get('/api/v1/Security');
   return response.data;
}

// export async function checkSecurityInAction() {
//     const response = await axios.get(url);
//     return response.data;
// }


export async function createSecurity(data) {
    const response = await server.post('/api/v1/Security',data);
    console.log(response.data);
}

export async function deleteSecurity(securityId) {
    const response = await server.delete(`api/v1/Security/${securityId}`);
    window.location.reload();
   //  return response.data;
}

export async function updateSecurity(data) {
    const response = await server.put(`/api/v1/Security/${data.id}`,data);
    console.log(response.data);
}