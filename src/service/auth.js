import axios from "./axios.js"

const Auth = {
    AuthRegister(user) {
        return axios.post('/users', { user })
    },
    getToken() {
        return axios.get('/user')
    }
}

export default Auth