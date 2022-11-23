import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentGame: null,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentGame(state, action) {
      state.currentGame = action.payload
    },
  },
})

export const { setCurrentGame } = gameSlice.actions

export default gameSlice.reducer
