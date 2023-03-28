import axios from "./axios.js"

const Product = {
    getProduct() {
        return axios.get('/todos')
    },
    add(product) {
        return axios.post('/todo/add', { product })
    },
    edit(id, article) {
        return axios.post(`/todo/edit/${id}`, { article })
    },
    delete(id) {
        return axios.delete(`/todo/delete/${id}`)
    },
    ArticleDetail(id) {
        return axios.get(`/todo/detail/${id}`)
    },
}

export default Product