import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'

export const Item = (props) => {
  const { id, description, category } = props.item;

  const dispatch = useDispatch()

  return (
    <div className="item-container">
      <span>{description.charAt(0).toUpperCase() + description.slice(1)}</span>
      <span>{category}</span>
      <button onClick={() => { dispatch(fridge.actions.removeItem(id)) }} type="button">x</button>
    </div>
  )
}
