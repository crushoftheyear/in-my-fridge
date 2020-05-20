import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'

export const Item = (props) => {
  const { _id, name, category } = props.item;

  const dispatch = useDispatch()

  return (
    <div className="item-container">
      <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
      <span>{category}</span>
      <button onClick={() => { dispatch(fridge.actions.removeItem(_id)) }} type="button">x</button>
    </div>
  )
}
