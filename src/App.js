import React from 'react'
import styled from 'styled-components/macro'
import 'normalize.css'

import { FridgeItems } from 'components/FridgeItems'
import { AddItem } from 'components/AddItem'

const Wrapper = styled.div``

export const App = () => {
  return (
    <Wrapper>
      <FridgeItems />
      <AddItem />
    </Wrapper>
  )
}
