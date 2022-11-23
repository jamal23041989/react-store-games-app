import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsInCart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItemsCart(state, action) {
      state.itemsInCart.push(action.payload)
    },
    deleteItemFromCart(state, action) {
      state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
    },
  },
})

export const { setItemsCart, deleteItemFromCart } = cartSlice.actions

export default cartSlice.reducer
