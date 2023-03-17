import styled, { keyframes } from 'styled-components'
import { fadeInRight } from 'react-animations'
import { Link } from 'react-router-dom'

const FadeInRight = keyframes`${fadeInRight}`
export const ColorIcon = '#5ef7a0'

export const ViewLink = styled.div`
  align-items: center;
  justify-content: space-around;
  background-color: #32385a;
  animation: 0.7s ${FadeInRight};
  width: 90%;
  height: 40px;
  display: flex;
  border-end-start-radius: 10px;
  border-start-start-radius: 10px;
  flex-direction: row;
`
export const TitleLink = styled(Link)`
  text-decoration: none;
  color: #5ef7a0;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  width: 80%;
  display: flex;
  font-size: 20px;
`
export const IconView = styled.span`
  width: 30%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
