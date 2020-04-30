import React from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { TextInput } from './TextInput'

export const EmojiPicker = ({ state, setState }) => {
  return (
    <>
      <TextInput
        label=""
        id=""
        placeholder="[e]"
        state={state}
        setState={setState} />

      <Picker include="foods" />
    </>
  )
}
