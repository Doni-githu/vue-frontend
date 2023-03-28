import axios from "axios";
import { getItem } from "../helpers/Storage.js"

axios.defaults.baseURL = 'http://localhost:8000/api/'

axios.interceptors.request.use(config => {
    const token = getItem('token')
    const authorization = token ? `${token}` : ''
    config.headers.Authorization = authorization
    config.headers['Content-Type'] = 'text/json'
    return config
})
export default axios