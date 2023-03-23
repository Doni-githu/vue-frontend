import Product from "../service/product.js"
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
            const connected = Product.getProduct()
            connected.then(res => {
                context.commit('SuccessProduct', JSON.parse(res))
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}