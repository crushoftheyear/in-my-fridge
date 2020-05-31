import React, { useState, useEffect } from 'react'

import { Header } from 'components/Header'
import { Sorting } from 'components/Sorting'
import { FridgeItems } from 'components/FridgeItems'
import { Loading } from 'components/Loading'
import { AddItem } from 'components/AddItem'

import 'normalize.css'
import 'sass/app.scss'

export const App = () => {
  const apiUrl = 'https://my-fridge-api.herokuapp.com'
  const [loading, setLoading] = useState(true)
  const [groceries, setGroceries] = useState([])
  const [sort, setSort] = useState('name')

  useEffect(() => {
    setLoading(true)

    fetch(`${apiUrl}/groceries?sort=${sort}`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => { // Show loader for a longer time
          setGroceries(data.groceries)
          setLoading(false)
        }, 1000)
      })
  }, [sort])

  return (
    <div className="wrapper">

      <Header />
      <Sorting state={sort} setState={setSort} />
      {loading ? // Show loader if loading is true, else display thoughts
        <Loading loading={loading} />
        :
        <FridgeItems groceries={groceries} apiUrl={apiUrl} />
      }
      <AddItem setGroceries={setGroceries} apiUrl={apiUrl} />

    </div>
  )
}
