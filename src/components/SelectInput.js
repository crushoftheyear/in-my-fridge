import React from 'react'

export const SelectInput = ({ label, options, state, setState }) => {
  return (
    <>
      <select
        onChange={(e) => setState(e.target.value)}
        aria-label={label}
        value={state}
        required>
        <option value="" disabled>Select</option> {/* First item in list */}

        {/* Render select options from options (props) */}
        {options.map((option) => (
          <option key={option} value={option}> {option}</option>
        ))}

      </select>

    </>
  )
}