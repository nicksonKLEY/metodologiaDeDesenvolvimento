import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 18rem;

  > h2 {
    font-size: 1rem;
    color: red;
  }
`

export const Content = styled.main`
  padding-top: 3rem;

  > button {
    font-size: 1.5rem;
    background: #1f2442;
    color: #38ac72;
    font-weight: normal;

    padding: 0.5rem 1rem;

    border: none;
    border-radius: 0.6rem;
    cursor: pointer;

    &:hover {
      scale: 1.1;
      transition: scale 300ms;
    }
  }
`

export const ContainerStatus = styled.div`
  margin-top: 2rem;
  background: white;
  max-width: 98.7rem;
  min-width: 28rem;
  padding: 1rem;
`
