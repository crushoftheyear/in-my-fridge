import React from 'react'

export const Item = ({ icon, desc, cat, quantity }) => {
  return (
    <div className="item">
      <span role="img" aria-label="">{icon}</span>
      <span>{desc}</span>
      <span>{cat}</span>
      <span>[{quantity}]</span>
      <button type="button">x</button>
    </div>
  )
}
