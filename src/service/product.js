import axios from "./axios"

const Product = {
    getProduct(){
        return axios.get('/api/todos', {headers: {"Content-type": 'text/json'}})
    }
}

export default Product