import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ViewLink = styled.div`
  align-items: center;
  justify-content: space-around;
  background-color: #1f2442;
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 100%;
  height: 4rem;
  display: flex;
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
  background-color: #1f2442;
  &::before {
    background-color: ${(props) => {
      return props.style
        ? (isActive) => (isActive ? '#1F2442' : '#474A6B')
        : '#474A6B'
    }};
  }
  &[aria-current] {
    background: #474a6b;
  }
  border-end-start-radius: 1rem;
  border-start-start-radius: 1rem;
  color: #40cd7e;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  width: 100%;
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
export const TxtLink = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 868px) {
    font-size: 1.2rem;
  }
`
