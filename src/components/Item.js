import React from 'react'

export const Item = ({ icon, desc, quantity }) => {
  return (
    <div>
      <span role="img" aria-label="">{icon}</span>
      <span>{desc}</span>
      <span>[{quantity}]</span>
      <button type="button">x</button>
    </div>
  )
}
