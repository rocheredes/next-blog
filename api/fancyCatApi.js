import axios from "axios";

const fancyCatApi = axios.create({
    baseURL: '/api'
})

export default fancyCatApi