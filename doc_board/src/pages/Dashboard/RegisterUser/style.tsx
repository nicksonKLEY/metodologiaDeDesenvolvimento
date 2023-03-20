import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding-left: 45px;
  @media (max-width: 768px) {
    font-size: 16px;
    padding-left: 20px;
  }
`
export const ContainerMain = styled.div`
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
  background-color: #e6e7e8;
  box-shadow: 0px 10px 10px #222544;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
`
export const BtnRegister = styled.button`
  background-color: #1f2442;
  color: #2fe57e;
  font-size: 20px;
  width: 200px;
  height: 40px;
  margin-top: 25px;
  border-radius: 10px;
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
  height: 30px;
  background-color: #dcdcdf;
`
export const NameUserHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  background-color: #c5c7d1;
  margin-right: 5px;
  color: #1f2442;
`
export const CPFUserHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24%;
  background-color: #c5c7d1;
  color: #1f2442;
  margin-right: 5px;
`
export const AcessLeveluserHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  background-color: #c5c7d1;
  color: #1f2442;
  margin-right: 5px;
`
export const PasswordUser = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 10%;
  background-color: #c5c7d1;
  color: #1f2442;
  margin-right: 5px;
`

export const ActionPainel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  background-color: #c5c7d1;
`
export const FieldName = styled(NameUserHeader)`
  height: 35px;
  font-size: 18px;
  background-color: #d8dbe6;
`
export const FieldCPf = styled(CPFUserHeader)`
  font-size: 18px;
  background-color: #d8dbe6;
`
export const FieldPassword = styled(PasswordUser)`
  font-size: 18px;
  background-color: #d8dbe6;
`
export const FieldAcessLevel = styled(AcessLeveluserHeader)`
  font-size: 18px;
  background-color: #d8dbe6;
`
export const FieldActionPainel = styled(ActionPainel)`
  display: flex;
  flex-direction: row;
  background-color: #d8dbe6;
`
export const BtnAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: #1f2442;
  border: 3px solid;
  border-color: #3db895;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
  }
`
export const ColorIconAction = '#46cea7 '

export const TextHeader = styled.p`
  font-size: 14px;
  color: #2b2f44fd;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`
export const ContentInfos = styled.div`
  height: 500px;
  width: 100%;
`
export const FieldData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`

export const MsgError = styled.span`
  margin-top: 5px;
  color: #e25a2d;
  font-size: 15px;
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
  margin-top: 20px;
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid;
  outline: none;
  padding-left: 10px;
  font-size: 20px;
  &::placeholder {
    color: #060606;
  }
`
export const BtnCreateNewUser = styled.button`
  background-color: #40cd7e;
  border-width: 2px;
  border-style: solid;
  border-color: #000;
  border-radius: 30px;
  font-weight: bold;
  outline: none;
  height: 40px;
  width: 140px;
  font-size: 20px;
  color: #2b2f44;
  cursor: pointer;
`
