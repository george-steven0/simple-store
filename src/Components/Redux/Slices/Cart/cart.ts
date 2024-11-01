import { createSlice } from "@reduxjs/toolkit";
import { cartInitState } from "../../../Types/types";
import { toast } from "react-toastify";


const initialState:cartInitState = {
    cartItems: [],
    total: 0
}
const cartSlice = createSlice({
    name : 'Cart Slice',
    initialState,
    reducers:{
        addToCart : (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i.id === item.id);
            if(existingItem){
                existingItem.qty = item.qty
                toast.success('Item quantity increased' ,{toastId : 'increaseByQty'})
            } else{
                state.cartItems.push({...item})
                toast.success('Item add to cart',{toastId : 'addNewCart'} )
            }
            state.total = state.cartItems.length !==0 ? 
                state.cartItems.reduce((acc,item)=>{
                    return acc += (item?.price * item?.qty)
                },0) : 0;
        },
        increaseItem : (state,action)=>{
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i.id === item?.id);
            if(existingItem){
                existingItem.qty = existingItem.qty + 1
                toast.success('Item quantity Increase' ,{toastId : 'increase'})
            }
            state.total = state.cartItems.length!==0? 
                state.cartItems.reduce((acc,item)=>{
                    return acc += (item?.price * item?.qty)
                },0) : 0;
        },
        decreaseItem : (state,action)=>{
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i.id === item?.id);
            if(existingItem && existingItem.qty > 1){
                existingItem.qty = existingItem.qty - 1
                toast.success('Item quantity decreased',{toastId : 'decrease'} )
            } else{
                toast.warn('Item quantity cannot be decreased further',{toastId : 'warning'} )
            }
            state.total = state.cartItems.length!==0? 
                state.cartItems.reduce((acc,item)=>{
                    return acc += (item?.price * item?.qty)
                },0) : 0;
        },
        removeFromCart : (state, action) => {
            const itemId = action.payload;            
            const updatedCartItems = state.cartItems.filter(item => item.id!== itemId);
            state.cartItems = updatedCartItems;
            state.total = state.cartItems.length!==0? 
                state.cartItems.reduce((acc,item)=>{
                    return acc += (item?.price * item?.qty)
                },0) : 0;            
            toast.success('Item removed from cart' )
        },
        clearCart : (state) => {
            state.cartItems = [];
            state.total = 0;
        }
    }
})

export const { addToCart, removeFromCart, clearCart,decreaseItem,increaseItem } = cartSlice.actions;
export default cartSlice.reducer;