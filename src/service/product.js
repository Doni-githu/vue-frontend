import axios from "./axios.js"

const Product = {
    getProduct() {
        return axios.get('/todos', { headers: { "Content-type": 'text/json' } })
    }
}

export default Product