import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { TextInput } from './TextInput'
import { SelectInput } from './SelectInput'

export const AddItem = ({ apiUrl, setGroceries }) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')

  const categories = ['Cheese', 'Drinks', 'Protein', 'Sauces', 'Sweets', 'Vegetables', 'Other']

  const submitHandler = (e) => {
    e.preventDefault()

    const itemBody = JSON.stringify({ name, category }, (key, value) => {
      if (value) {
        return value
      } else {
        return undefined
      }
    })

    fetch(`${apiUrl}/groceries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: itemBody
    }).then((res) => res.json())
      .then((newItem) => {
        setGroceries((previousItems) => [newItem, ...previousItems])
      })
  }

  return (
    <section className="add-item">
      <form onSubmit={submitHandler}>
        <TextInput
          label="Add item"
          id=""
          placeholder="Add item"
          state={name}
          setState={setName} />

        <SelectInput
          label=""
          id="selectCategory"
          options={categories}
          state={category}
          setState={setCategory} />

        <button className="add-btn" type="submit" aria-label="Click to add item">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </section>
  )
}