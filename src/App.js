import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
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

const store = configureStore({ reducer })

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
