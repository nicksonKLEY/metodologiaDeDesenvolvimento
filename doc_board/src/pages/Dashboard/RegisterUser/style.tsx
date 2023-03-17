import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: flex-end;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: #fff;
  margin-left: 40px;
`
export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
`

export const ContainerList = styled.div`
  width: 85%;
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
