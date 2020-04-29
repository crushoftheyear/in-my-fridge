import { createSlice } from '@reduxjs/toolkit'

export const fridge = createSlice({
  name: 'fridge',
  initialState: {
    items: [
      { icon: '☁️', desc: 'cloud', quantity: 4 }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const { newItem } = action.payload
      state.items.push(newItem)
    }
  }
})