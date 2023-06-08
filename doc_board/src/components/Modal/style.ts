import styled from 'styled-components'
import { MdClear } from 'react-icons/md'

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d0f21c0;
  position: absolute;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`
export const ViewModal = styled.div`
  box-sizing: border-box;
  width: 45rem;
  height: 45rem;
  background-color: #e6e7e8;
  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 2rem #2225442e;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`
export const HeaderTitle = styled.header`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TitleModal = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  color: #2b2f44;
  margin-top: 3rem;
`
export const ViewBtnExit = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`
export const BtnExit = styled(MdClear)`
  width: 3rem;
  height: 3rem;
  border-radius: 4rem;
  border: solid 0.4rem;
  background-color: #fff;
  justify-content: center;
  text-align: center;
  font-size: 4rem;
  cursor: pointer;
  float: right;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(700%, -140%);
  margin-top: -20rem;
`
// FORM
export const ContainerForm = styled.form`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`
export const BtnCreateNewUser = styled.button`
  padding: 0.6rem 6rem;

  background-color: #40cd7e;
  color: #1f2843;

  border-radius: 1rem;
  align-self: center;
  border: 1px solid #6c726e;
  transition: transform 0.2s;

  font-weight: bold;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
