import { createReducer } from "@reduxjs/toolkit"
import { addToCart,cleanCart,removeFromCart } from "../actions/cartActions"

const initialState = {
    items: [],
}


export const cartReducer = createReducer(initialState, (builder) => {
    builder.addCase(addToCart, (state, action) => {
        const { id, name, price } = action.payload
        const existItem = state.items.find((item) => item.id === id)
        if (existItem) {
            existItem.quantity++;
        } else {
            state.items.push({
                id,
                name,
                price,
                quantity: 1,
            });
        }
    }).addCase(removeFromCart, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
    }).addCase(cleanCart, (state, action) => {
        state.items = [];
    })
})