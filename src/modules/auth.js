import Auth from "../service/auth";
import { setItem } from "../helpers/Storage"
const state = {
    isLoading: false,
    user: null,
    err: null,
    isLoggIn: false
}

const mutations = {
    StartRegist(state) {
        state.isLoggIn = null
        state.isLoading = true
        state.user = null
        state.err = null
    },
    SuccessRegist(state, payload) {
        state.isLoggIn = true
        state.isLoading = false
        state.user = payload
    },
    FailurRegist(state, error) {
        state.isLoggIn = null
        state.isLoading = false
        state.err = error
    },
    CurrentStart(state) {
        state.isLoggIn = null
        state.isLoading = true
    },
    CurrentSuccess(state, payload) {
        state.isLoading = false
        state.isLoggIn = true
        state.user = payload
    },
    CurrentFailur(state, error) {
        state.isLoggIn = null
        state.isLoading = false
        state.err = error
    },
    StartLogin(state) {
        state.isLoading = true
        state.isLoggIn = null
        state.user = null
        state.errr = null
    },
    SuccessLogin(state, payload) {
        state.isLoading = false
        state.isLoggIn = true
        state.user = payload
    },
    FailurLogin(state, payload) {
        state.isLoading = false
        state.isLoggIn = null
        state.err = payload
    }
}

const actions = {
    getUser(context, user) {
        return new Promise((resolve, reject) => {
            context.commit("StartRegist")
            Auth.AuthRegister(user)
                .then((res) => {
                    resolve(res.data)
                    setItem("token", res.data.token)
                    context.commit('SuccessRegist', res.data._doc)
                })
                .catch(err => {
                    reject(err)
                    context.commit('FailurRegist', err.response)
                })
        })
    },
    getUserByToken(context) {
        return new Promise(() => {
            context.commit('CurrentStart')
            Auth.getToken()
                .then(res => {
                    context.commit('CurrentSuccess', res.data)
                }).catch((err) => {
                    context.commit('CurrentFailur', err.response)
                })
        })
    },
    login(context, obj) {
        return new Promise(() => {
            context.commit('StartLogin')
            Auth.AuthLogin(obj)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    context.commit('FailurLogin', err.response.data.message)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}