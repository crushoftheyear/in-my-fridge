import React, { useState, useEffect } from 'react'

import { Header } from 'components/Header'
import { FridgeItems } from 'components/FridgeItems'
import { AddItem } from 'components/AddItem'

import 'normalize.css'
import 'sass/app.scss'

export const App = () => {
  const apiUrl = 'https://my-fridge-api.herokuapp.com'
  const [loading, setLoading] = useState(true)
  const [groceries, setGroceries] = useState([])

  useEffect(() => {
    setLoading(true)

    fetch(`${apiUrl}/groceries`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => { // Show loader for a longer time
          setGroceries(data)
          setLoading(false)
        }, 1000)
      })
  }, [])

  return (
    <div className="wrapper">

      <Header />
      <FridgeItems groceries={groceries} apiUrl={apiUrl} />
      <AddItem setGroceries={setGroceries} apiUrl={apiUrl} />

    </div>
  )
}
