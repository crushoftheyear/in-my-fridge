import React from 'react'

export const TextInput = ({ label, id, placeholder, state, setState }) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        onChange={event => setState(event.target.value)}
        value={state}
        placeholder={placeholder}
        required
      />
    </>
  )
}