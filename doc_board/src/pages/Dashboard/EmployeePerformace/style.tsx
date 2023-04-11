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
