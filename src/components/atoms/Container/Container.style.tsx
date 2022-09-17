import styled from 'styled-components'
interface ContainerInterface {
  fullHeight?: boolean
  fullCentered?: boolean
}

const Container = styled.div`
  display: flex;
  color: white;
  height: ${({ fullHeight }: ContainerInterface) => (!fullHeight ? 'auto' : '100vh')};
  justify-content: ${({ fullCentered }: ContainerInterface) =>
    !fullCentered ? 'initial' : 'center'};
  align-items: ${({ fullCentered }: ContainerInterface) => (!fullCentered ? 'initial' : 'center')};
`

export default Container
