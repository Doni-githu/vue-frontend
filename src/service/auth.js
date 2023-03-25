import axios from "./axios.js"

const Auth = {
    AuthRegister(user) {
        return axios.post('/user', { user })
    },
}

export default Auth