// import styled, { keyframes } from 'styled-components'
import styled from 'styled-components'
// import { fadeInLeft } from 'react-animations'
import { IoCloseSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'

export const Container = styled.nav`
  padding: 0;
  margin: 0;

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
  font-family: 'Poppins', sans-serif;
  color: #5ef7a0;
  margin-right: 1.7rem;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`
export const ContainerHeight = styled.div`
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
    width: 13%;
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
  height: 70rem;
  display: flex;
  justify-content: center;
  @media (max-width: 868px) {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

export const ContainerInfo = styled.div`
  width: 100%;
  height: 8rem;
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
  @media (max-width: 868px) {
    width: 90%;
    flex-direction: column-reverse;
  }
`
export const Logo = styled.img`
  width: 6rem;
  height: 3rem;
  @media (max-width: 768px) {
    width: 3rem;
    height: 2.3rem;
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
  @media (max-width: 768px) {
    width: 4rem;
  }
`
export const TxtLink = styled.p`
  font-size: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`
export const FaBarsIcon = styled(FaBars)`
  font-size: 10rem;
  &:hover {
    scale: 1.1;
    transition: scale 300ms;
  }
`
export const CloseSidebar = styled(IoCloseSharp)`
  color: #5ef7a0;
  width: 4rem;
  height: 2rem;
  &:hover {
    scale: 1.1;
    transition: scale 300ms;
  }
`
export const ColorIconOpen = '#5ef7a0'
