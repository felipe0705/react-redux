import { createReducer } from "@reduxjs/toolkit";
import { setCategory, setSearch, getProducts, createProduct } from "../actions/productActions"

// const initialProducts = [
//   { id: 1, name: "Zapatillas Deportivas", category: "Zapatos", price: 59.99 },
//   { id: 2, name: "Camiseta Básica", category: "Camisetas", price: 19.99 },
//   { id: 3, name: "Gorra de Béisbol", category: "Accesorios", price: 14.99 },
//   { id: 4, name: "Abrigo de Lana", category: "Abrigos", price: 89.99 },
//   { id: 5, name: "Sandalias", category: "Zapatos", price: 29.99 },
//   { id: 6, name: "Camiseta Gráfica", category: "Camisetas", price: 24.99 },
//   { id: 7, name: "Bufanda", category: "Accesorios", price: 12.99 },
//   { id: 8, name: "Chaqueta de Cuero", category: "Abrigos", price: 129.99 },
// ];


const initialState = {
  products: [],
  category: "Todas",
  search: "",
  loading: true,
  error: false,
};



export const productReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCategory, (state, action) => {
    state.category = action.payload
  }).addCase(setSearch, (state, action) => {
    state.search = action.payload
  })


    //Casos para solicitud de productos
    .addCase(getProducts.pending, (state) => {

      state.loading = true;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload
    })
    .addCase(getProducts.rejected, (state, action) => {
      state.error = true
      state.loading = false
    })

    //Casos para crear Producto
    .addCase(createProduct.pending, (state) => {
      console.log("Esta pendiente creación");
      state.loading = true;
    })
    .addCase(createProduct.fulfilled, (state, action) => {
      console.log("Se ha creado");
      state.loading = false;
      state.products.push(action.payload);
    })
})

//IMMER TOOLKIT