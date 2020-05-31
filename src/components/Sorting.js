import React from 'react'
import { RadioButtons } from './RadioButtons'

const options = ['name', 'category', 'newest', 'oldest']

export const Sorting = ({ state, setState }) => {
  return (
    <section className="sorting-container">
      <RadioButtons
        label="Sort:"
        items={options}
        state={state}
        setState={setState} />
    </section>
  )
}