import { ReactNode, useState } from 'react'

// import { FaBars } from 'react-icons/fa'
import { IoExitOutline } from 'react-icons/io5'

import LogoImg from '../../assets/imgs/simbolo.png'
import {
  ColorIconOpen,
  Container,
  TitlePage,
  ContainerHeight,
  ViewTitle,
  ViewElements,
  ContainerInfo,
  Footer,
  Logo,
  BtnExit,
  TxtLink,
  FaBarsIcon,
  CloseSidebar,
} from './style'
import { useAuthContext } from '../../hooks/authContext'
import { useNavigate } from 'react-router-dom'

interface namePageProps {
  tPage: string

  itemNavigate: ReactNode
}

export default function Sidbar({ tPage, itemNavigate }: namePageProps) {
  const [sidebar, setSidebar] = useState(false)

  const { signOut } = useAuthContext()
  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <>
      {sidebar ? (
        <Container>
          <ViewTitle>
            <FaBarsIcon
              onClick={showSiderbar}
              cursor={'pointer'}
              size={20}
              color={ColorIconOpen}
            />
          </ViewTitle>
        </Container>
      ) : (
        <ContainerHeight>
          <ContainerInfo>
            <ViewTitle>
              <TitlePage>{tPage}</TitlePage>
              <CloseSidebar onClick={showSiderbar} cursor={'pointer'} />
            </ViewTitle>
          </ContainerInfo>
          <ViewElements>{itemNavigate}</ViewElements>
          <Footer>
            <BtnExit onClick={handleSignOut}>
              <TxtLink> Sair</TxtLink>
              <IoExitOutline size={35} color={ColorIconOpen} />
            </BtnExit>
            <Logo src={LogoImg} />
          </Footer>
        </ContainerHeight>
      )}
    </>
  )
}
