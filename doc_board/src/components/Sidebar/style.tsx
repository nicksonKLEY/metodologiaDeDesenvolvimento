import styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeInDown } from 'react-animations'

const FadeInLeft = keyframes`${fadeInLeft}`
const FadeInDown = keyframes`${fadeInDown}`

export const Container = styled.nav`
  padding: 0;
  margin: 0;
  animation: 0.3s ${FadeInLeft};
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #1f2442;
  border-radius: 0rem 1rem 1rem 0rem;
  flex-direction: row;
  position: fixed;
  @media (max-width: 768px) {
    height: 3rem;
    width: 2.5rem;
    align-items: center;
  }
`
export const TitlePage = styled.h1`
  color: #5ef7a0;
  margin-right: 2.7rem;
  font-size: 2.1rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-right: 1.1rem;
  }
`
export const ContainerHeight = styled.div`
  animation: 0.2s ${FadeInDown};
  height: 100%;
  width: 15%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #1f2442;
  border-radius: 0rem 1rem 1rem 0rem;
  flex-direction: column;
  position: relative;
  @media (max-width: 768px) {
    font-size: 1.4rem;
    width: 15%;
  }
`
export const ViewTitle = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 868px) {
    width: 100%;
    fontt-size: 2rem;
  }
`
export const ViewElements = styled.div`
  width: 100%;
  height: 4rem;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  margin-top: 2rem;
  flex-direction: row;
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 1rem;
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
  height: 9rem;
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
  width: 6rem;
  height: 3rem;
  @media (max-width: 768px) {
    width: 5rem;
    height: 3rem;
  }
`
export const BtnExit = styled.button`
  color: #5ef7a0;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f2442;
  border: none;
  width: 7rem;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    transition: scale 300ms;
  }
`
export const ColorIconOpen = '#5ef7a0'
