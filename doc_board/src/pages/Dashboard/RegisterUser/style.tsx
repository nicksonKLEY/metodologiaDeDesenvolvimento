import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding-left: 4.5rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding-left: 2rem;
  }
`
export const ContainerMain = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`
export const ContainerContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
`

export const ContainerList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
export const ViewList = styled.div`
  width: 97%;
  height: 88%;
  background-color: #ffffff;
  box-shadow: 0rem 1rem 1rem #222544;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  display: flex;
`
export const BtnRegister = styled.button`
  background-color: #1f2442;
  color: #2fe57e;
  font-size: 2rem;
  width: 20rem;
  height: 4rem;
  margin-top: 2.5rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    transition: scale 300ms;
  }
`

export const ListContain = styled.div`
  width: 95%;
  height: 90%;
`
export const HeaderList = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
`
export const NameUserHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  background-color: #c5c7d1;
  margin-right: 0.5rem;
  color: #1f2442;
`
export const CPFUserHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24%;
  background-color: #c5c7d1;
  color: #1f2442;
  margin-right: 0.5rem;
`
export const AcessLeveluserHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  background-color: #c5c7d1;
  color: #1f2442;
  margin-right: 0.5rem;
`
export const PasswordUser = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 10%;
  background-color: #c5c7d1;
  color: #1f2442;
  margin-right: 0.5rem;
`

export const ActionPainel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  background-color: #c5c7d1;
`
export const FieldName = styled(NameUserHeader)`
  height: 3.5rem;
  font-size: 1.8rem;
  background-color: #ffffff;
  box-shadow: 0rem 1rem 2rem #dddddd;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
export const FieldCPf = styled(CPFUserHeader)`
  font-size: 1.8rem;
  background-color: #ffffff;
  box-shadow: 0rem 1rem 2rem #dddddd;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
export const FieldPassword = styled(PasswordUser)`
  font-size: 1.8rem;
  background-color: #ffffff;
  box-shadow: 0rem 1rem 2rem #dddddd;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
export const FieldAcessLevel = styled(AcessLeveluserHeader)`
  font-size: 1.7rem;
  background-color: #ffffff;
  box-shadow: 0rem 1rem 2rem #dddddd;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const FieldActionPainel = styled(ActionPainel)`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  box-shadow: 0rem 1rem 2rem #dddddd;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
export const BtnAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.3rem;
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: #1f2442;
  border: 0.3rem solid;
  border-color: #3db895;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
  }
  @media (max-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
`
export const ColorIconAction = '#46cea7 '

export const TextHeader = styled.p`
  font-size: 1.4rem;
  color: #2b2f44fd;
  text-align: center;
  font-weigth: bold;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const ContentInfos = styled.div`
  height: 50rem;
  width: 100%;
`
export const FieldData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`

export const MsgError = styled.span`
  margin-top: 0.5rem;
  color: #e25a2d;
  font-size: 1.5rem;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`
export const ViewInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Input = styled.input`
  margin-top: 2rem;
  width: 100%;
  height: 4rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 0.1rem solid;
  outline: none;
  padding-left: 1rem;
  font-size: 2rem;
  &::placeholder {
    color: #060606;
  }
`

export const BtnCreateNewUser = styled.button`
  background-color: #40cd7e;
  border-width: 0.2rem;
  border-style: solid;
  border-color: #000;
  border-radius: 3rem;
  font-weight: bold;
  outline: none;
  height: 4rem;
  width: 14rem;
  font-size: 2rem;
  color: #2b2f44;
  cursor: pointer;
`
