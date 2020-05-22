import React from 'react'

export const Item = (props) => {
  const { name, category } = props.item;


  return (
    <div className="item-container">
      <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
      <span>{category}</span>
      <button onClick={() => { }} type="button">x</button>
    </div>
  )
}
