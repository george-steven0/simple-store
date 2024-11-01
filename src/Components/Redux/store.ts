import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slices/ProductSlice/product';
import cartSlice from './Slices/Cart/cart';

export const store = configureStore({
    reducer:{
        products: productSlice,
        cart : cartSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;