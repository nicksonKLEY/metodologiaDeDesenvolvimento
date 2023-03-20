import { ViewLogo, Logo, ContainerMain, Container } from './style'
import NavMaster from '../../components/NavMaster'
import LogoImg from '../../assets/imgs/logo.png'

export default function DashboardApp() {
  return (
    <ContainerMain>
      <NavMaster />
      <Container>
        <ViewLogo>
          <Logo src={LogoImg} />
        </ViewLogo>
      </Container>
    </ContainerMain>
  )
}
