import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/Cart/cartSlice'

export const store = configureStore({ reducer: { cartReducer } })
