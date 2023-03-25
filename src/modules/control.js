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
        return new Promise(() => {
            context.commit('StartAddProduct')
            Product.add(product)
                .then((res) => {
                    console.log(res.data);
                }).catch((err) => {
                    console.log(err.response);
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}