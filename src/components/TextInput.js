import React from 'react'

export const TextInput = ({ label, placeholder, state, setState }) => {
  return (
    <>
      <input
        type="text"
        aria-label={label}
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder={placeholder}
        required />
    </>
  )
}