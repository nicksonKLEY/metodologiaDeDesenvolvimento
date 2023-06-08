import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled.h1`
  font-size: 5rem;
  letter-spacing: 0.8rem;
  color: #fff;
`
export const Msg = styled.span`
  margin-top: 1rem;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 0.3rem;
`
export const GoBack = styled(Link)`
  margin-top: 2rem;
  width: 24rem;
  height: 5rem;
  color: #2fe57e;
  background-color: #1f2442;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 2rem;
  font-size: 3rem;
  cursor: pointer;
`
export const ColorIcon = '#5ef7a0'
