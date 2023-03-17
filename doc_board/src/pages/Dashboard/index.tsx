import { ViewLogo, Logo, ContainerMain } from './style'
import NavMaster from '../../components/NavMaster'
import LogoImg from '../../assets/imgs/logo.png'

export default function DashboardApp() {
  return (
    <ContainerMain>
      <NavMaster />

      <ViewLogo>
        <Logo src={LogoImg} />
      </ViewLogo>
    </ContainerMain>
  )
}
