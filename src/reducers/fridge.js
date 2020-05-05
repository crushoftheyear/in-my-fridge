import { createSlice } from '@reduxjs/toolkit'

export const fridge = createSlice({
  name: 'fridge',
  initialState: {
    items: [
      { id: Date.now(), description: 'sambal', category: 'other' }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const { newItem } = action.payload
      state.items.push(newItem)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})