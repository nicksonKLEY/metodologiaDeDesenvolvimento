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
  height: 450px;
  width: 330px;
  background-color: #1f2442;
  border-radius: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  border: 4px solid;
  border-color: #2fe57e;
`
export const ViewInput = styled.div`
  width: 80%;
  background-color: #32385a;
  box-shadow: 0px 12px 10px #1e2340;
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`
export const Input = styled.input`
  width: 200px;
  background-color: #32385a;
  margin-left: 5px;
  color: #2fe57e;
  border: none;
  outline: none;
  font-weight: bold;
  letter-spacing: 2px;
  &::placeholder {
    color: #2fe57e;
  }
`
export const BtnAcess = styled.button`
  width: 250px;
  margin-top: 30px;
  background-color: #2fe57e;
  border: none;
  border-radius: 20px;
  transition: all 0.5s;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 15px;
  text-decoration: none;
  color: #212121;
  justify-content: center;
  padding: 10px;
  display: flex;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: #5ef7a0;
  }
`
export const Logo = styled.img`
  width: 120px;
  height: 90px;
  margin-bottom: 30px;
`
export const ColorIcon = '#5ef7a0'
