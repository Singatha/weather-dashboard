import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
// export const { } = weatherSlice.actions

export default weatherSlice.reducer
