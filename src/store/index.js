import { createStore } from "vuex";
import product from "../modules/product";
import auth from "../modules/auth";

const store = createStore({
    state: {},
    actions: {},
    mutations: {},
    modules: { product, auth },
})
export default store