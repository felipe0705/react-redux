import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "./reducers/productReducer"
import { cartReducer } from "./reducers/cartReducer"

const store = configureStore({
    reducer: {
        productStore: productReducer,
        cartStore: cartReducer,
    }
})
//state{
//    productStore,
//    cartStore
//}
export default store