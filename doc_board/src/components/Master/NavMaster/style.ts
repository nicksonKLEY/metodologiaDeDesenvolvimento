import styled from 'styled-components'
import { TbChartInfographic } from 'react-icons/tb'
import { AiOutlineUser } from 'react-icons/ai'

export const ColorIcon = '#5ef7a0'
export const ColorActive = '#fff'
// interface DivProps {
//   isActive: boolean
// }
export const ViewItems = styled.div`
  width: 100%;
  height: 30rem;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
