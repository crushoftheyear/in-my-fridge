import React from 'react'
import styled from 'styled-components/macro'

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  >* {
    flex: 0 1 auto;
  }
`

export const Item = ({ icon, desc, cat, quantity }) => {
  return (
    <ItemContainer>
      <span role="img" aria-label="">{icon}</span>
      <span>{desc}</span>
      <span>{cat}</span>
      <span>[{quantity}]</span>
      <button type="button">x</button>
    </ItemContainer>
  )
}
