import React from 'react'
import { Item } from './Item'

export const FridgeItems = ({ groceries }) => {

  return (
    <section className="fridge-container">

      {groceries.map((item) => (
        <Item
          key={item._id}
          item={item} />
      ))}

    </section>

  )
}
