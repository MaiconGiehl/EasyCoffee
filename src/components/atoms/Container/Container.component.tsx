import React from 'react'
import Container from './Container.style'

interface ContainerInterface {
  content?: string[]
}

const ContainerComponent = (props: ContainerInterface) => (
  <>
    <Container />
  </>
)

export default ContainerComponent
