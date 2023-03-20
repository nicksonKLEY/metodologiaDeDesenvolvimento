import { useState } from 'react'
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
export default function Sidbar({ itemNavigate1, itemNavigate2 }: any) {
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
              <TitlePage>Master</TitlePage>
              <IoCloseSharp
                onClick={showSiderbar}
                cursor={'pointer'}
                size={25}
                color={ColorIconOpen}
              />
            </ViewTitle>

            <ViewElements>{itemNavigate1}</ViewElements>
            <ViewElements>{itemNavigate2}</ViewElements>
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
