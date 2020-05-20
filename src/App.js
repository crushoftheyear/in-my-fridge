import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Header } from 'components/Header'
import { FridgeItems } from 'components/FridgeItems'
import { AddItem } from 'components/AddItem'

import { ui } from 'reducers/ui'
import { fridge } from 'reducers/fridge'

import 'normalize.css'
import 'sass/app.scss'

const reducer = combineReducers({
  ui: ui.reducer,
  fridge: fridge.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">

        <Header />
        <FridgeItems />
        <AddItem />

      </div>
    </Provider>
  )
}
