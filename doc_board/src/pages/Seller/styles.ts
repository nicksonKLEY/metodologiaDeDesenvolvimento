import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  height: 100vh;
  width: 100%;
`

export const Container = styled.div`
  padding: 0 8rem;
  width: 100%;

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

    padding: 0.8rem 1.4rem;

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
  padding: 1rem;
  width: 100%;
`
