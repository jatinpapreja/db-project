export async function getTags() {
    const response = await axios.get(url);
    return response.data;
}

export async function createTag() {
    const response = await axios.post();
    return response.data;
}

