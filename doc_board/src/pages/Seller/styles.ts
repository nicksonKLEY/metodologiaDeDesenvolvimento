import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  height: 100vh;
  width: 100%;
`

export const Container = styled.div`
  padding: 0 8rem;
  /* background-color: red; */
  width: 100%;

  > h2 {
    font-size: 1rem;
    color: red;
  }

  /* background-color: red; */
`

export const Content = styled.main`
  padding-top: 3rem;
`

export const ContainerStatus = styled.div`
  margin-top: 2rem;
  background: white;
  padding: 1rem;
  width: 100%;
`
