import { createStore } from "vuex";
import product from "../modules/product";
import auth from "../modules/auth";
import control from "../modules/control";

const store = createStore({
    state: {},
    actions: {},
    mutations: {},
    modules: { product, auth, control },
})
export default store