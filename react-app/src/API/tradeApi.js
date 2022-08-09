import server from './server.js';
import axios from 'axios';

export async function getTradesOfSecurity(securityId) {
    const response = await server.get(`/api/v1/getTradesForSecurity?ID=${securityId}`);
    return response.data;
}

// export async function createTradeOfSecurity() {
//     const response = await axios.post();
//     return response.data;
// }

// export async function deleteTradeOfSecurity() {
//     const response = await axios.delete();
//     return response.data;
// }

// export async function updateTradeOfSecurity() {
//     const response = await axios.put();
//     return response.data;
// }