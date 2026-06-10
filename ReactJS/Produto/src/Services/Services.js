import axios from "axios";

const apiPort = "300"

const localApi =`http://localhost:${apiPort}`

const externalApi = null 

const api = axios.create({
    baseURL: localApi
})

export default api