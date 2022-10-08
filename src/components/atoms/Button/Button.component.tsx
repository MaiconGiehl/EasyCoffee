import React, { BaseHTMLAttributes } from 'react'
import Button from './Button.style'

interface ButtonInterface extends BaseHTMLAttributes<typeof Button> {
  children?: JSX.Element | string
}

const ButtonComponent = ({ children }: ButtonInterface) => <Button>{children}</Button>

export default ButtonComponent
