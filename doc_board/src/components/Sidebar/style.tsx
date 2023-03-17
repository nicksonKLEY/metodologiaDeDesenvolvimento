import styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeInDown } from 'react-animations'

const FadeInLeft = keyframes`${fadeInLeft}`
const FadeInDown = keyframes`${fadeInDown}`

export const Container = styled.div`
  padding: 0;
  margin: 0;
  animation: 0.3s ${FadeInLeft};
  height: 50px;
  width: 15%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #1f2442;
  border-radius: 0px 10px 10px 0px;
  flex-direction: row;
  position: fixed;
  overflow: auto;
`
export const TitlePage = styled.h1`
  color: #5ef7a0;
  margin-right: 27px;
  font-size: 20px;
`
export const ContainerHeight = styled.div`
  animation: 0.2s ${FadeInDown};
  height: 100%;
  width: 15%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #1f2442;
  border-radius: 0px 10px 10px 0px;
  flex-direction: column;
  position: fixed;
  overflow: auto;
`
export const ViewTitle = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const ViewElements = styled.div`
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
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
  justify-content: space-around;
`
export const Logo = styled.img`
  width: 60px;
  height: 30px;
  display: block;
`
export const BtnExit = styled.button`
  color: #5ef7a0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f2442;
  border: none;
  width: 70px;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    transition: scale 300ms;
  }
`
export const ColorIconOpen = '#5ef7a0'
