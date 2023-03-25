import Product from "../service/product.js"
const state = {
    isLoading: false,
    data: null,
    error: null
}

const mutations = {
    startProduct(state) {
        state.isLoading = true
        state.data = null
        state.err = null
    },
    SuccessProduct(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    FailurProduct(state, payload) {
        state.isLoading = false
        state.error = payload
    },
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
    getProducts(context) {
        return new Promise(() => {
            context.commit('startProduct')
            Product.getProduct()
                .then(res => {
                    context.commit('SuccessProduct', res.data)
                }).catch(err => {
                    context.commit('FailurProduct', err)
                })
        })
    },
    add(context, product) {
        return new Promise(() => {
            context.commit('StartAddProduct')
            Product.add(product)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
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