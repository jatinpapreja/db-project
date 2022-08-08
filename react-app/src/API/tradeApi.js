export async function getTradesOfSecurity() {
    const response = await axios.get(url);
    return response.data;
}

export async function createTradeOfSecurity() {
    const response = await axios.post();
    return response.data;
}

export async function deleteTradeOfSecurity() {
    const response = await axios.delete();
    return response.data;
}

export async function updateTradeOfSecurity() {
    const response = await axios.put();
    return response.data;
}