import axios from 'axios'

export async function createUser() {
    const response = await axios.post();
    return response.data;
}

export async function isAuthenticUser() {
    const response = await axios.get();
    return response.data;
}

export async function getUserDetails() {
   const response =  await axios.get();
   return response.data;
}

export async function getUserWishlist() {
    const response = await axios.get();
    return response.data;
}

export async function updateUserWishlist() {
    const response = await axios.put();
    return response.data;
}