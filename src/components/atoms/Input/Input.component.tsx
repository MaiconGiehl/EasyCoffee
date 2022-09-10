import React from 'react'
import Input from './Input.style'

interface InputInterface {
  content?: string
}

const InputComponent = (props: InputInterface) => (
  <>
    <Input />
  </>
)

export default InputComponent
