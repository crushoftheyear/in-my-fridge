import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Item } from './Item'

const FridgeContainer = styled.section``

export const FridgeItems = () => {
  const fridgeItems = useSelector((state) => state.fridge.items)

  return (
    <FridgeContainer>
      In my fridge:

      {fridgeItems.map((item) => (
        <Item
          key={item.desc}
          icon={item.icon}
          desc={item.desc}
          quantity={item.quantity} />
      ))}

    </FridgeContainer>

  )
}
