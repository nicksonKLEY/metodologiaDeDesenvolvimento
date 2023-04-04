import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000;
  background-color: #32385a;
  align-items: center;
  display: flex;
  justify-content: center;
`

export const ViewSingIn = styled.form`
  height: 45rem;
  width: 33rem;
  background-color: #1f2442;
  border-radius: 2rem;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  border: 0.4rem solid;
  border-color: #2fe57e;
`
export const ViewInput = styled.div`
  width: 80%;
  background-color: #32385a;
  box-shadow: 0rem 1.2rem 1rem #1e2340;
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
`
export const Input = styled.input`
  width: 20rem;
  background-color: #32385a;
  margin-left: 0.5rem;
  color: #2fe57e;
  border: none;
  outline: none;
  font-weight: bold;
  letter-spacing: 0.2rem;
  &::placeholder {
    color: #2fe57e;
  }
`
export const BtnAcess = styled.button`
  width: 25rem;
  margin-top: 3rem;
  background-color: #2fe57e;
  border: none;
  border-radius: 2rem;
  transition: all 0.5s;
  font-weight: bold;
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  text-decoration: none;
  color: #212121;
  justify-content: center;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: #5ef7a0;
  }
`
export const Logo = styled.img`
  width: 12rem;
  height: 9rem;
  margin-bottom: 3rem;
`
export const ColorIcon = '#5ef7a0'
