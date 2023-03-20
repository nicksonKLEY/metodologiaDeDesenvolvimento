import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations'

const FadeInRight = keyframes`${fadeInUp}`
export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #66698487;
  opacity: 1;
  position: absolute;
`
export const ViewModal = styled.div`
  animation: 0.2s ${FadeInRight};
  width: 450px;
  height: 500px;
  background-color: #e6e7e8;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #2225442e;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`
export const HeaderTitle = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TitleModal = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #2b2f44;
  margin-top: 30px;
`
export const ViewBtnExit = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`
export const BtnExit = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background-color: #fff;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  margin-left: 30px;
  border-width: 4px;
  border-style: solid;
  border-color: #000;
  position: absolute;
`
// FORM
export const ContainerForm = styled.form`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
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
