import styled, { keyframes } from 'styled-components'
import { fadeInRight } from 'react-animations'
import { NavLink } from 'react-router-dom'

const FadeInRight = keyframes`${fadeInRight}`
export const ColorIcon = '#5ef7a0'
export const ColorActive = '#fff'

export const ViewLink = styled.div`
  align-items: center;
  justify-content: space-around;
  background-color: #32385a;
  animation: 0.7s ${FadeInRight};
  width: 100%;
  height: 40px;
  display: flex;
  border-end-start-radius: 10px;
  border-start-start-radius: 10px;
  flex-direction: row;
  margin-left: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 30px;
    margin-left: 10px;
  }
`
export const TitleLink = styled(NavLink)`
  text-decoration: ${(props) => {
    console.log(props.style)
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
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
export const IconView = styled.span`
  width: 30%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
