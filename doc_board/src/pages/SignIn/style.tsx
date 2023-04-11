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
  height: 53rem;
  width: 40rem;
  background-color: #1f2442;
  box-shadow: 0rem 0rem 5rem #1e2340c3;
  border-radius: 2.5rem;
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
  width: 27rem;
  height: 3rem;
  background-color: #32385a;
  margin-left: 0.5rem;
  color: #2fe57e;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1.9rem;
  letter-spacing: 0.2rem;
  &::placeholder {
    color: #2fe57e;
  }
`
export const BtnAcess = styled.button`
  width: 32rem;
  height: 5rem;
  margin-top: 5rem;
  background-color: #2fe57e;
  border: none;
  border-radius: 5rem;
  transition: all 0.5s;
  font-weight: bold;
  letter-spacing: 0.2rem;
  font-size: 1.7rem;
  text-decoration: none;
  color: #212121;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: #5ef7a0;
  }
`
export const Logo = styled.img`
  width: 15rem;
  height: 12rem;
  margin-bottom: 5rem;
`
export const ColorIcon = '#5ef7a0'
