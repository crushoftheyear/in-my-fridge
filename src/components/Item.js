import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { fridge } from 'reducers/fridge'

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  >* {
    flex: 0 1 auto;
  }
`
export const Item = (props) => {
  const { id, description, category } = props.item;

  const dispatch = useDispatch()

  return (
    <ItemContainer>
      <span>{description.charAt(0).toUpperCase() + description.slice(1)}</span>
      <span>{category}</span>
      <button onClick={() => { dispatch(fridge.actions.removeItem(id)) }} type="button">x</button>
    </ItemContainer>
  )
}
