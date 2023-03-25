import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000/api/'

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = token ? `Token ${token}` : ''
    config.headers.Authorization = authorization
    return config
})
export default axios