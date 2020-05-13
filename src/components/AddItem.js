import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { fridge } from 'reducers/fridge'
import { TextInput } from './TextInput'
import { SelectInput } from './SelectInput'

export const AddItem = () => {
  const [desc, setDesc] = useState('')
  const [cat, setCat] = useState('')

  const categories = ['Cheese', 'Drinks', 'Protein', 'Sauces', 'Sweets', 'Vegetables', 'Other']

  const dispatch = useDispatch()

  // Dispatch addItem w/ values from input fields
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(fridge.actions.addItem({
      newItem: {
        id: Date.now(),
        description: desc,
        category: cat
      }
    }))
    setDesc('')
    setCat('')
  }

  return (

    <form className="add-item" onSubmit={submitHandler}>
      <TextInput
        label=""
        id=""
        placeholder="Add item"
        state={desc}
        setState={setDesc} />

      <SelectInput
        label=""
        id="selectCategory"
        options={categories}
        state={cat}
        setState={setCat} />

      <button className="add-btn" type="submit" aria-label="Click to add item">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>

  )
}