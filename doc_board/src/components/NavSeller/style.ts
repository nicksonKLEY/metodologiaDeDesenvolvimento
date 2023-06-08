import styled from 'styled-components'
import { TbFileUpload } from 'react-icons/tb'
export const ColorIcon = '#5ef7a0'
export const ColorActive = '#fff'

export const ViewLink = styled.div`
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
export const TitleLink = styled.a`
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
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
export const IconView = styled.span`
  width: 30%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconSeller = styled(TbFileUpload)`
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
