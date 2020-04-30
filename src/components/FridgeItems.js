import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Item } from './Item'

const FridgeContainer = styled.section``

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.2rem;
`

export const FridgeItems = () => {
  const fridgeItems = useSelector((state) => state.fridge.items)

  return (
    <FridgeContainer>
      <Title>In my fridge:</Title>

      {fridgeItems.map((item) => (
        <Item
          key={item.id}
          item={item} />
      ))}

    </FridgeContainer>

  )
}
