import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/macro'

import { fridge } from 'reducers/fridge'
import { SelectInput } from './SelectInput'

const AddContainer = styled.form`
  margin-top: 2rem;
`

export const AddItem = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const [cat, setCat] = useState('')

  // Select options
  const categories = ['Cheese', 'Drinks', 'Protein', 'Sauces', 'Sweets', 'Vegetables', 'Other']

  // Dispatch addItem w/ values from input fields
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(fridge.actions.addItem({
      newItem: {
        description: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
        category: cat,
        quantity: 1
      }
    }))
    setInputValue('')
  }

  return (

    <AddContainer className="add-item" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Add item"
        aria-label="Type an item"
        required />

      <SelectInput
        label=""
        id="selectCategory"
        options={categories}
        state={cat}
        setState={setCat} />

      <button className="add-btn" type="submit" aria-label="Click to add item">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </AddContainer>

  )
}