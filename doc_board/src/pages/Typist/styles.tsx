import styled from 'styled-components'

export const Container = styled.div`
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
export const ContainerMain = styled.div`
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
export const TitlePage = styled.h1`
  color: #1f2442;
  font-size: 3.5rem;
`
export const AnalizedElement = styled.button`
  cursor: pointer;
  border: none;
  background-color: #1f2442;
  width: 90%;
  margin-top: 1rem;
  height: 4.5rem;
  border-radius: 1.5rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  color: #fff;
  &:hover {
    background-color: #333a60;
  }
`
export const FieldClient = styled.p`
  width: 30rem;
  font-weight: bold;
  font-size: 2rem;
  margin-left: 2rem;
  justify-content: flex-start;
  display: flex;
`
export const FieldBank = styled.p`
  width: 30rem;
  font-weight: bold;
  font-size: 2rem;
`
export const FieldStatus = styled.p`
  width: 30rem;
  font-weight: bold;
  font-size: 2rem;
  margin-right: 2rem;
  justify-content: flex-end;
  display: flex;
`
