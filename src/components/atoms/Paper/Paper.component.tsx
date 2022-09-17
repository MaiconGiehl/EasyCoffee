import React from 'react'
import Container from './Paper.style'

type PaperComponentInterface = {
  children?: JSX.Element | JSX.Element[]
}

const PaperComponent: React.FC<PaperComponentInterface> = ({ children }) => (
  <Container>{children}</Container>
)

export default PaperComponent
