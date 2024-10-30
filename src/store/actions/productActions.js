import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setSearch = createAction("SET_SEARCH");
export const setCategory = createAction("SET_CATEGORY");

export const getProducts = createAsyncThunk("GET_PRODUCTS", async () => {
    const response = await axios.get("http://localhost:8090/store/products/all");
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return response.data.response
})

export const createProduct = createAsyncThunk("CREATE_PRODUCT", async () => {
    console.log("Se inicio creación");
    const productNew = { "name": "Gorra Test", "category": "Accesorios", "price": 9.99 }
    await new Promise((resolve) => setTimeout(resolve, 500))
    const response = await axios.post('http://localhost:8090/store/products/create', productNew)
    return response.data.product
})
