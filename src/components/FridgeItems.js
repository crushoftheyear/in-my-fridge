import React from 'react'
import styled from 'styled-components/macro'
import { Item } from './Item'

const FridgeContainer = styled.section``

export const FridgeItems = () => {
  return (
    <FridgeContainer>
      In my fridge:
      <Item />
    </FridgeContainer>

  )
}
