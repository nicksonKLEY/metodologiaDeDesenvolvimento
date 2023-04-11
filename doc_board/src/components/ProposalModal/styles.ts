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
  min-width: 29rem;
  border-radius: 6px;
  padding: 4rem 2rem;
  background-color: #e6e7e8;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > form {
    input {
      width: 100%;
      padding: 1.4rem;

      background-color: #ffffff;

      border-radius: 0.3rem;
      border-width: 0.1rem;
      border-color: #9b9dad;
      margin-bottom: 0.5rem;
      outline: none;

      &::placeholder {
        color: #2e334e;
        font-size: 1.3rem;
      }
    }
  }
`

export const Title = styled(Dialog.Title)`
  font-size: 1.9rem;
  color: #3d415b;
  text-align: center;

  margin-bottom: 2rem;
`

export const WrapperInput = styled.div`
  width: 100%;
  flex-wrap: nowrap;
  display: flex;
  gap: 0.6rem;

  > div {
    width: 100%;
  }
`

export const AttachmentLabel = styled.label`
  display: inline-block;
  margin-top: 1rem;
  cursor: pointer;

  font-size: 1.4rem;
`

export const AttachmentsInput = styled.input`
  display: none;
`

export const EmptyFile = styled.p`
  font-size: 1rem;
  margin-top: 0.1rem;
`

export const ButtonSubmitContainer = styled.div`
  width: 100%;

  display: grid;
  place-items: center;

  margin-top: 1.8rem;
`

export const ButtonSubmit = styled.button`
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

export const PdfList = styled.ul`
  list-style: none;
  background-color: #ffffff;
  padding: 0.5rem;
  margin-top: 0.4rem;

  > li {
    font-size: 1.3rem;
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: #fff;
  border: none;
  top: -0.5rem;
  right: -0.5rem;
  line-height: 0;
  cursor: pointer;

  border-radius: 1.9rem;
`

export const ErrorMessage = styled.span`
  font-size: 0.9rem;
  color: red;
`
