import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const fridge = createSlice({
  name: 'fridge',
  initialState: {
    fridge: []
  },
  reducers: {
    setFridge: (state, action) => {
      state.fridge = action.payload
    },
    addItem: (state, action) => {
      const { newItem } = action.payload
      state.fridge.push(newItem)
    },
    removeItem: (state, action) => {
      state.fridge = state.fridge.filter((item) => item._id !== action.payload)
    }
  }
})

export const fetchGroceries = (path) => {
  const url = 'https://my-fridge-api.herokuapp.com'
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`${url}${path}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fridge.actions.setFridge(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}