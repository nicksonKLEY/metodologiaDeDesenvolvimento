import styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeInDown, fadeInRight } from 'react-animations'

const FadeInLeft = keyframes`${fadeInLeft}`
const FadeInDown = keyframes`${fadeInDown}`
const FadeInRight = keyframes`${fadeInRight}`

export const Container = styled.div`
  animation: 0.3s ${FadeInLeft};
  height: 50px;
  width: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #1f2442;
  border-radius: 0px 10px 10px 0px;
  flex-direction: row;
  position: absolute;
`
export const TitlePage = styled.h1`
  color: #5ef7a0;
  margin-right: 27px;
  font-size: 20px;
`
export const ContainerHeight = styled.div`
  animation: 0.2s ${FadeInDown};
  height: 100%;
  width: 200px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #1f2442;
  border-radius: 0px 10px 10px 0px;
  flex-direction: column;
  position: absolute;
`
export const ViewTitle = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`
export const ViewElements = styled.div`
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  display: flex;
  margin-top: 20px;
`
export const Elements = styled.span`
  animation: 0.7s ${FadeInRight};
  background-color: #32385a;
  width: 90%;
  height: 40px;
  display: flex;
  border-end-start-radius: 10px;
  border-start-start-radius: 10px;
`
export const ContainerInfo = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
`
export const Footer = styled.footer`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.img`
  width: 70px;
  height: 40px;
`
export const BtnExit = styled.button`
  color: #5ef7a0;
  font-size: 20px;
  display: flex;
  align-items: center;
  background-color: #1f2442;
  border: none;
  width: 70px;
  cursor: pointer;
  margin-right: 10px;
`
export const ColorIconOpen = '#5ef7a0'
