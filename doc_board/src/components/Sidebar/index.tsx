import { ReactNode, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoCloseSharp, IoExitOutline } from 'react-icons/io5'

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
} from './style'
interface namePageProps {
  tPage: string
  itemNavigate1: ReactNode
}

export default function Sidbar({ tPage, itemNavigate1 }: namePageProps) {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <>
      {sidebar ? (
        <Container>
          <ViewTitle>
            <FaBars
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
              <IoCloseSharp
                onClick={showSiderbar}
                cursor={'pointer'}
                size={25}
                color={ColorIconOpen}
              />
            </ViewTitle>

            <ViewElements>{itemNavigate1}</ViewElements>
          </ContainerInfo>

          <Footer>
            <BtnExit>
              Sair
              <IoExitOutline size={35} color={ColorIconOpen} />
            </BtnExit>
            <Logo src={LogoImg} />
          </Footer>
        </ContainerHeight>
      )}
    </>
  )
}
