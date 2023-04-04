import { Container, Title, Msg, GoBack, ColorIcon } from './style'
import { BiError } from 'react-icons/bi'
export default function Error404() {
  return (
    <Container>
      <BiError size={80} color={ColorIcon} />
      <Msg>Erro</Msg>
      <Title>404</Title>
      <Msg>Rota inexistente</Msg>
      <GoBack to="/registerEmployee"> voltar</GoBack>
    </Container>
  )
}
