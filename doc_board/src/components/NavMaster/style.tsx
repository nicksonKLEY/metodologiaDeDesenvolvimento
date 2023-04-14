import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { TbChartInfographic } from 'react-icons/tb'
import { AiOutlineUser } from 'react-icons/ai'

export const ColorIcon = '#5ef7a0'
export const ColorActive = '#fff'

export const ViewItems = styled.div`
  width: 100%;
  height: 30rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ViewLink = styled.div`
  align-items: center;
  justify-content: space-around;
  background-color: #474a6b;
  width: 100%;
  height: 4rem;
  display: flex;
  border-end-start-radius: 1rem;
  border-start-start-radius: 1rem;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    width: 90%;
  }
`
export const TitleLink = styled(NavLink)`
  text-decoration: ${(props) => {
    return props.style
      ? (isActive) => (isActive ? 'underline' : 'none')
      : 'none'
  }};
  &:hover {
    text-decoration: underline;
  }
  &[aria-current] {
    color: #e5f9ee;
  }
  color: #5ef7a0;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  width: 80%;
  display: flex;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    justify-content: center;
    width: 100%;
  }
`
export const IconView = styled.span`
  width: 30%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.style ? (isActive) => (isActive ? '#121212' : '#fff') : 'none'
  }};
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const IconPerformance = styled(TbChartInfographic)`
  font-size: 2.7rem;
  color: ${(props) => {
    return props.style ? (isActive) => (isActive ? '#121212' : '#fff') : 'none'
  }};
  &:hover {
    scale: 1.1;
    transition: scale 300ms;
    color: #97ebbb;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`
export const IconUser = styled(AiOutlineUser)`
  font-size: 2.7rem;
  color: ${(props) => {
    return props.style ? (isActive) => (isActive ? '#121212' : '#fff') : 'none'
  }};
  &:hover {
    scale: 1.1;
    transition: scale 300ms;
    color: #97ebbb;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`
export const TxtLink = styled.p`
  font-size: 1.4rem;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 868px) {
    font-size: 1.2rem;
  }
`
