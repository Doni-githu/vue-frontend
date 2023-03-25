import Auth from "../service/auth";
import { setItem } from "../helpers/Storage"
const state = {
    isLoading: false,
    user: null,
    err: null
}

const mutations = {
    StartRegist(state) {
        state.isLoading = true
        state.user = null
        state.err = null
    },
    SuccessRegist(state, payload) {
        state.isLoading = false
        state.user = payload
    },
    FailurRegist(state, error) {
        state.isLoading = false
        state.err = error
    },
}

const actions = {
    getUser(context, user) {
        return new Promise((resolve, reject) => {
            context.commit("StartRegist")
            Auth.AuthRegister(user)
                .then((res) => {
                    resolve(res.data)
                    setItem("token", res.data.token)
                    context.commit('SuccessRegist', res.data)
                })
                .catch(err => {
                    reject(err)
                    context.commit('FailurRegist', err.response.statusText)
                })
        })
    },
}

export default {
    state,
    mutations,
    actions
}