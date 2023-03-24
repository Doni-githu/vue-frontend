import axios from "./axios"

const Auth = {
    AuthRegister(user) {
        return axios.post('/api/user', { user })
    }
}

export default Auth