import React from 'react'

export const SelectInput = ({ label, id, options, state, setState }) => {

  return (
    <>
      <label htmlFor={id}>{label}</label>

      <select
        onChange={event => setState(event.target.value)}
        id={id}
        value={state}
        required
      >
        <option value="" disabled>Select</option> {/* First item in list */}

        {/* Render select options from options (props) */}
        {options.map(option => (
          < option key={option} value={option} > {option}</option>
        ))}

      </select>

    </>
  )
}