import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { productStateType } from "../../../Types/types";

type getProductsProps = {
    category? : string | null
}
export const getProducts = createAsyncThunk('getProducts-Function', async ({category}:getProductsProps)=>{
    const url = `/products/${category ? `category/${category}` : ''}`
    
    try{
        const response = await axios.get(url)
        return response.data
    } catch(err:unknown){
        console.log(err);
        
    }
});

export const getCategory = createAsyncThunk('getCategory-Function', async ()=>{
    const url = '/products/categories'

    try{
        const response = await axios.get(url)
        return response.data
    } catch(err:unknown){
        console.log(err);
    }
})

type getSingleProductsProps = {
    id? : number | string
}
export const getSingleProduct = createAsyncThunk('getSingleProduct-Function', async ({id}:getSingleProductsProps)=>{
    const url = `/products/${id}`
    
    try{
        const response = await axios.get(url)
        return response.data
    } catch(err:unknown){
        console.log(err);
        
    }
});

const initialState:productStateType = {
    loading : true,
    products : [],
    singleProduct : null,
    category : [],
    error : null
}

const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(getProducts.pending, (state)=>{
            state.loading = true
            state.error = null
            })
        .addCase(getProducts.fulfilled, (state, action)=>{
            state.loading = false
            state.products = action.payload
            state.error = null
            })
        .addCase(getProducts.rejected, (state, action)=>{
            state.loading = false
            state.products = []
            state.error = action.payload ? { message: action.payload as string } : null;
        })

        .addCase(getCategory.pending, (state)=>{
            state.loading = true
            state.error = null
            })
        .addCase(getCategory.fulfilled, (state, action)=>{
            state.loading = false
            state.category = action.payload
            state.error = null
            })
        .addCase(getCategory.rejected, (state, action)=>{
            state.loading = false
            state.category = []
            state.error = action.payload ? { message: action.payload as string } : null;
        })

        .addCase(getSingleProduct.pending, (state)=>{
            state.loading = true
            state.error = null
            })
        .addCase(getSingleProduct.fulfilled, (state, action)=>{
            state.loading = false
            state.singleProduct = action.payload
            state.error = null
            })
        .addCase(getSingleProduct.rejected, (state, action)=>{
            state.loading = false
            state.singleProduct = null
            state.error = action.payload ? { message: action.payload as string } : null;
        })
    }
})

export default productSlice.reducer;