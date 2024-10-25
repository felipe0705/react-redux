import { addToCart, removeFromCart, clearCart } from "../actions/cartActions"
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartReducer = createReducer(initialState, (builder) => {
    builder.addCase(addToCart, (state, action) => {
        const { id, name, price } = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.items.push({
                id: id,
                name,
                price,
                quantity: 1,
            });
        }

        
    }).addCase(removeFromCart, (state, action) => {

        state.items = state.items.filter((item) => item.id !== action.payload)
    }).addCase(clearCart, (state) => {
        state.items = []
    })
})