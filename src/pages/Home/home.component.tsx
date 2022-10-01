import React from 'react'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'
import Paper from '../../components/atoms/Paper'
import Input from '../../components/atoms/Input'
import Typography from '../../components/atoms/Typography'

const Home = () => (
  <Container fullHeight fullCentered>
    <Paper>
      <Typography>Bem Vindo!</Typography>
      <Input type="text" />
      <br />
      <Button>Entrar</Button>
    </Paper>
  </Container>
)

export default Home
