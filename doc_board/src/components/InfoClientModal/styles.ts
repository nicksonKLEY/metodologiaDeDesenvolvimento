import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`
export const Content = styled(Dialog.Content)`
  min-width: 45rem;
  padding: 4.2rem 2.6rem 3.2rem;
  background: #e6e7e8;

  border-radius: 1rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Title = styled(Dialog.Title)`
  font-size: 2.4rem;
  font-weight: 600;
  color: #1f2442;
  line-height: 0.8rem;
  text-align: center;
`

export const Form = styled.form`
  width: 100%;
  flex: 1;

  margin-top: 3.1rem;
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1.3rem;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  font-size: 1.5rem;
  line-height: 0.8rem;
  color: #1f2442;
`

export const Wrapper = styled.div`
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding-left: 0.6rem;
  border: 2px solid #474a6b;
  border-radius: 0.5rem;

  background-color: #ffffff;
  font-size: 1.5rem;
  color: #474a6b;

  &::placeholder {
    color: #474a6b;
    font-size: 1.5rem;
  }
`

export const ContentFiles = styled.div`
  width: 100%;
  height: 8.5rem;
  background-color: #ffffff;
  border: 2px solid #1f2442;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding: 0.6rem 0.6rem 1rem;
`

export const FilesWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

export const Files = styled.span`
  color: #000000;
  font-size: 1.4rem;
`

export const ButtonDownload = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 1rem;
  border: none;
  cursor: pointer;

  font-size: 1.5rem;
`

export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.3rem;
`

export const Button = styled.button`
  height: 3.8rem;
  width: 11.9rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2.5rem;
  background: #1f2442;
`

export const TextButton = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  color: #40cd7e;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: #fff;
  border: none;
  top: -1.4rem;
  right: -1.4rem;
  line-height: 0;
  cursor: pointer;

  font-size: 2.5rem;
  border: 4px solid #1f2442;

  border-radius: 1.9rem;
`
