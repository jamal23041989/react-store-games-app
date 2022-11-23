import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/Cart/cartSlice'
import gameReducer from './slices/Game/gameSlice'

export const store = configureStore({ reducer: { cartReducer, gameReducer } })
