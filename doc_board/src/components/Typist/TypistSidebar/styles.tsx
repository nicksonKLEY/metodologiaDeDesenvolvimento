import styled from 'styled-components'
import { IoNewspaperOutline } from 'react-icons/io5'

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

export const IconUser = styled(IoNewspaperOutline)`
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
