import { ContainerMain, Container } from './style'
import NavMaster from '../../components/NavMaster'
import RegisterEmployee from './RegisterUser'
export default function DashboardApp() {
  return (
    <ContainerMain>
      <NavMaster />
      <Container>
        <RegisterEmployee />
      </Container>
    </ContainerMain>
  )
}
