import styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeInDown } from 'react-animations'

const FadeInLeft = keyframes`${fadeInLeft}`
const FadeInDown = keyframes`${fadeInDown}`

export const Container = styled.div`
  padding: 0;
  margin: 0;
  animation: 0.3s ${FadeInLeft};
  height: 40px;
  width: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #1f2442;
  border-radius: 0px 10px 10px 0px;
  flex-direction: row;
  position: fixed;
  overflow: auto;
  @media (max-width: 768px) {
    height: 30px;
    width: 25px;
    align-items: center;
  }
`
export const TitlePage = styled.h1`
  color: #5ef7a0;
  margin-right: 27px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 10px;
  }
`
export const ContainerHeight = styled.div`
  animation: 0.2s ${FadeInDown};
  height: 100%;
  width: 250px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #1f2442;
  border-radius: 0px 10px 10px 0px;
  flex-direction: column;
  position: relative;
  overflow: auto;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 130px;
  }
`
export const ViewTitle = styled.div`
  width: 230px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 868px) {
    width: 100%;
  }
  @media (max-width: 1324px) {
    width: 100%;
  }
`
export const ViewElements = styled.div`
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 10px;
  }
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
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column-reverse;
  }
`
export const Logo = styled.img`
  width: 60px;
  height: 30px;
  @media (max-width: 768px) {
    width: 50px;
    height: 30px;
  }
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
