import axios from "./axios.js"

const Product = {
    getProduct() {
        return axios.get('/todos', { headers: { "Content-type": 'text/json' } })
    },
    add(product) {
        return axios.post('/todo/add', { product })
    }
}

export default Product