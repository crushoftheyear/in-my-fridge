import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Item } from './Item'
import { fetchGroceries } from 'reducers/fridge'

export const FridgeItems = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGroceries('/groceries'))
  }, [dispatch])

  const fridgeItems = useSelector((state) => state.fridge.fridge)

  return (
    <section className="fridge-container">

      {fridgeItems.map((item) => (
        <Item
          key={item._id}
          item={item} />
      ))}

    </section>

  )
}
