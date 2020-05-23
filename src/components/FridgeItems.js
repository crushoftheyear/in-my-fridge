import React from 'react'
import { Item } from './Item'

export const FridgeItems = ({ groceries, apiUrl }) => {
  return (
    <section className="fridge-container">

      {groceries.map((item) => (
        <Item
          key={item._id}
          item={item}
          apiUrl={apiUrl} />
      ))}

    </section>

  )
}
