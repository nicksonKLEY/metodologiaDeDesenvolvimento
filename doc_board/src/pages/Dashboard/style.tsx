import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  color: #fff;
`
export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
`
export const ContainerList = styled.div`
  width: 84%;
  height: 100%;
  margin-right: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`
export const ViewList = styled.div`
  width: 100%;
  height: 88%;
  background-color: #e6e7e8;
  box-shadow: 0px 10px 10px #222544;
  margin-top: 20px;
  margin-left: 10px;
`
export const ViewLogo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BtnRegister = styled.button`
  background-color: #1f2442;
  color: #2fe57e;
  font-size: 20px;
  width: 200px;
  height: 40px;
  margin-top: 25px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`
export const Logo = styled.img`
  width: 250px;
  height: 190px;
  margin-bottom: 30px;
  opacity: 0.1;
`
export const ColorIcon = '#5ef7a0'
