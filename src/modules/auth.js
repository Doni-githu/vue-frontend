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
        state.isLoggIn = false
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
        state.isLoggIn = false
        state.isLoading = false
        state.err = error
    },
    CurrentStart(state) {
        state.isLoggIn = false
        state.isLoading = true
        state.user = null
        state.err = null
    },
    CurrentSuccess(state, payload) {
        state.isLoading = false
        state.isLoggIn = true
        state.user = payload
    },
    CurrentFailur(state, error) {
        state.isLoggIn = false
        state.isLoading = false
        state.err = error
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
                    context.commit('SuccessRegist', res.data)
                })
                .catch(err => {
                    reject(err)
                    context.commit('FailurRegist', err.response)
                })
        })
    },
    getUserByToken(context){
        return new Promise(()=>{
            context.commit('CurrentStart')
            Auth.getToken()
                .then(res=>{
                    context.commit('CurrentSuccess', res.data)
                    console.log(res.data);
                }).catch((err)=>{
                    console.log(err);
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}