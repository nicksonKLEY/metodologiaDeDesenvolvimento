import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`
export const Content = styled(Dialog.Content)`
  min-width: 28rem;
  border-radius: 6px;
  padding: 2.5rem 2rem;
  background-color: #e6e7e8;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > form {
    input {
      width: 100%;
      padding: 0.5rem;

      background-color: #ffffff;

      border-radius: 0.3rem;
      border-width: 0.1rem;
      border-color: #9b9dad;
      margin-bottom: 0.5rem;
      outline: none;

      &::placeholder {
        color: #2e334e;
        font-size: 1rem;
      }
    }
  }
`

export const Title = styled(Dialog.Title)`
  font-size: 1.6rem;
  color: #3d415b;
  text-align: center;

  margin-bottom: 2rem;
`

export const WrapperInput = styled.div`
  width: 100%;
  flex-wrap: nowrap;
  display: flex;
  gap: 0.6rem;
`

export const AttachmentsInput = styled.input`
  display: none;
`

export const EmptyFile = styled.p`
  font-size: 0.7rem;
  margin-top: 0.1rem;
`

export const ButtonSubmitContainer = styled.div`
  width: 100%;

  display: grid;
  place-items: center;

  margin-top: 1.8rem;
`

export const ButtonSubmit = styled.button`
  padding: 0.4rem 4rem;

  background-color: #40cd7e;
  color: #1f2843;

  border-radius: 1rem;
  align-self: center;
  border: 1px solid #6c726e;
  transition: transform 0.2s;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`

export const PdfList = styled.ul`
  list-style: none;
  background-color: #ffffff;
  padding: 0.5rem;
  margin-top: 0.4rem;

  > li {
    font-size: 0.8rem;
  }
`
