import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'
import 'normalize.css'

import { FridgeItems } from 'components/FridgeItems'
import { AddItem } from 'components/AddItem'

import { fridge } from 'reducers/fridge'

const Wrapper = styled.div`
  margin: 2rem;
`

const reducer = combineReducers({
  fridge: fridge.reducer
})

// Retrieve the localstorage & use as initial state
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Create store using the initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Store the state in localstorage on any Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <FridgeItems />
        <AddItem />
      </Wrapper>
    </Provider>
  )
}
