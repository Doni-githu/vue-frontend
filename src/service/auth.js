import axios from "./axios.js"

const Auth = {
    AuthRegister(user) {
        return axios.post('/users', { user })
    },
    getToken() {
        return axios.get('/user')
    },
    AuthLogin(obj) {
        return axios.post('/login', { user: obj })
    }
}

export default Auth