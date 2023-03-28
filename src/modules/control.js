import Product from "../service/product.js"
const state = {
    isLoading: false,
    data: null,
    error: null,
    detail: null
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
    },
    StartDelete(state) {
        state.isLoading = true
    },
    SuccessDelete(state) {
        state.isLoading = false
    },
    FailurDelete(state) {
        state.isLoading = false
    },
    StartGetArticleDetail(state) {
        state.isLoading = true
        state.detail = null
    },
    SuccessGetArticleDetail(state, payload) {
        state.isLoading = false
        state.detail = payload
    },
    FailurGetArticleDetail(state) {
        state.isLoading = false
    },
    StartEditArticle(state) {
        state.isLoading = true
        state.detail = null
    },
    SuccessEditArticle(state) {
        state.isLoading = false
    },
    FailurEditArticle(state) {
        state.isLoading = false
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
    },
    delete(context, id) {
        return new Promise(() => {
            context.commit('StartDelete')
            Product.delete(id)
                .then(() => {
                    context.commit('SuccessDelete')
                }).catch(() => {
                    context.commit('FailurDelete')
                })
        })
    },
    detail(context, id) {
        return new Promise((resolve) => {
            context.commit('StartGetArticleDetail')
            Product.ArticleDetail(id)
                .then((res) => {
                    resolve(res.data)
                    context.commit('SuccessGetArticleDetail', res.data)
                }).catch(() => {
                    context.commit('FailurGetArticleDetail')
                })
        })
    },
    editArticle(context, { id, article }) {
        return new Promise((resolve) => {
            context.commit('StartEditArticle')
            Product.edit(id, article)
                .then((res) => {
                    resolve(res.data)
                    context.commit('SuccessEditArticle')
                }).catch(() => {
                    context.commit('FailurEditArticle')
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}