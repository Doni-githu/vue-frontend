import Product from "../service/product"
const state = {
    isLoading: false,
    data: null,
    error: null
}

const mutations = {
    startProduct(state) {
        state.isLoading = true
    },
    SuccessProduct(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    FailurProduct(state, payload) {
        state.isLoading = false
        state.error = payload
    }
}

const actions = {
    getProducts(context) {
        return new Promise((resolve, reject) => {
            context.commit('startProduct')
            Product.getProduct()
                .then((res) => {
                    resolve(res)
                    context.commit('SuccessProduct', res)
                }).catch(err => {
                    reject(err)
                    context.commit('FailurProduct', err)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}