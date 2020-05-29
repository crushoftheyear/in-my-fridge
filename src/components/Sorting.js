import React from 'react'
import { RadioButtons } from './RadioButtons'

const testArray = ['newest', 'oldest', 'category', 'name']

export const Sorting = ({ state, setState }) => {
  return (
    <section className="sorting-container">
      <RadioButtons
        label="Sort:"
        items={testArray}
        state={state}
        setState={setState} />
    </section>
  )
}