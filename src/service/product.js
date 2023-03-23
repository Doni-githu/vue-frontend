import axios from "./axios"

const Product = {
    getProduct(){
        axios.get('/api/todos')
    }
}

export default Product