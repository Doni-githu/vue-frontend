import Product from "../service/product.js"
const state = {
    isLoading: false,
    data: null,
    error: null
}

const mutations = {
    StartAddProduct(state) {
        state.data = null
        state.err = null
        state.isLoading = true
    },
    SuccessAddProduct(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    FailurAddProduct(state, payload) {
        state.isLoading = false
        state.err = payload
    }
}

const actions = {
    add(context, product) {
        return new Promise((resolve, reject) => {
            context.commit('StartAddProduct')
            Product.add(product)
                .then((res) => {
                    resolve(res.data)
                    context.commit('SuccessAddProduct', res.data)
                }).catch((err) => {
                    context.commit('FailurAddProduct', err.response)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}