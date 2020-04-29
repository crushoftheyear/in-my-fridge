import { createSlice } from '@reduxjs/toolkit'

export const fridge = createSlice({
  name: 'fridge',
  initialState: {
    items: [
      { id: 1, icon: '☁️', desc: 'cloud', quantity: 4 }
    ]
  },
  reducers: {

  }
})