import {
  ViewList,
  BtnRegister,
  ContainerList,
  ContainerMain,
  Container,
} from './style'
import NavMaster from '../../../components/NavMaster'

export default function RegisterEmployee({ clickOp }: any) {
  return (
    <ContainerMain>
      <NavMaster />
      <Container>
        <ContainerList>
          {' '}
          <BtnRegister onClick={clickOp}>Registrar</BtnRegister>
          <ViewList></ViewList>
        </ContainerList>
      </Container>
    </ContainerMain>
  )
}
