import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/macro'

const AddContainer = styled.form``

export const AddItem = () => {
  const [inputValue, setInputValue] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    // Dispatch
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

      <button className="add-btn" type="submit" aria-label="Click to add item">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </AddContainer>

  )
}