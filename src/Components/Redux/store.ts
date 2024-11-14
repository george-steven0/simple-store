import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import productSlice from './Slices/ProductSlice/product';
import cartSlice from './Slices/Cart/cart';
import {createStateSyncMiddleware,initStateWithPrevTab} from 'redux-state-sync'
import {persistReducer,persistStore} from 'redux-persist'
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
    products: productSlice,
    cart : cartSlice
})

const syncConfig = {
    whitelist : ['Cart/addToCart', 'Cart/removeFromCart', 'Cart/clearCart', 'Cart/decreaseItem', 'Cart/increaseItem'],
    channel: 'redux-state-sync'
}

// redux-persist
const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(createStateSyncMiddleware(syncConfig) as Middleware)
})


initStateWithPrevTab(store)

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;