import Auth from "../service/auth";

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
    }
}

const actions = {
    getUser(context, user) {
        return new Promise(() => {
            context.commit("StartRegist")
            Auth.AuthRegister(user)
                .then((res) => {
                    context.commit('SuccessRegist', res)
                })
                .catch(err => {
                    context.commit('FailurRegist', err)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}