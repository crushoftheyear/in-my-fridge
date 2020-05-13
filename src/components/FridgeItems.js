import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from './Item'

export const FridgeItems = () => {
  const fridgeItems = useSelector((state) => state.fridge.items)

  return (
    <section className="fridge-container">

      {fridgeItems.map((item) => (
        <Item
          key={item.id}
          item={item} />
      ))}

    </section>

  )
}
