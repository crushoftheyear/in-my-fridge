import React from 'react'

export const Item = ({ item, apiUrl }) => {
  const { _id, name, category } = item

  const deleteItem = (id) => {
    fetch(`${apiUrl}/groceries/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      window.location.reload()
    })
  }

  return (
    <div className="item-container">
      <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
      <span>{category}</span>
      <button onClick={() => { deleteItem(_id) }} type="button">x</button>
    </div>
  )
}
