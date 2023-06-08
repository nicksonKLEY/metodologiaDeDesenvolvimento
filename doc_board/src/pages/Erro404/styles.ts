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
  font-size: 50px;
  letter-spacing: 8px;
  color: #fff;
`
export const Msg = styled.span`
  margin-top: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 3px;
`
export const GoBack = styled(Link)`
  margin-top: 20px;
  width: 240px;
  height: 50px;
  color: #2fe57e;
  background-color: #1f2442;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 20px;
  font-size: 30px;
  cursor: pointer;
`
export const ColorIcon = '#5ef7a0'
