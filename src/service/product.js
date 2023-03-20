import axios from "./axios"

const Product = {
    getProduct(){
        axios.get('/todos')
    }
}

export default Product