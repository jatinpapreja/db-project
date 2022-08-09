import axios from "axios";

const server = axios.create({
    baseURL:'https://db-grads-65pw-group-28.nw.r.appspot.com',
})

export default server;