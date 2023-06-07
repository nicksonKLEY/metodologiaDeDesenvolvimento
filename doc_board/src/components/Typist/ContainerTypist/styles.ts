import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 4.5rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding-left: 2rem;
  }
`
export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`
export const ContainerContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
`
export const ContainerClient = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
export const ViewPerformance = styled.div`
  padding-top: 2.5rem;
  width: 97%;
  height: 88%;
  background-color: #ffffff;
  box-shadow: 0rem 1rem 1rem #222544;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;
`
