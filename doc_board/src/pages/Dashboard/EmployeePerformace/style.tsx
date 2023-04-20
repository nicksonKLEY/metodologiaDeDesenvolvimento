import styled from 'styled-components'

export const Container = styled.body`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding-left: 4.5rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding-left: 2rem;
  }
`
export const ContainerMain = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`
export const ContainerContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
`
export const ContainerPerformance = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
export const ViewPerformance = styled.div`
  width: 97%;
  height: 88%;
  background-color: #ffffff;
  box-shadow: 0rem 1rem 1rem #222544;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`
export const TitlePage = styled.h1`
  color: #1f2442;
  font-size: 3.5rem;
`
