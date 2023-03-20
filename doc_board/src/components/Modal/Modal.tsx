import {
  ViewModal,
  ViewBtnExit,
  BtnExit,
  ContainerForm,
  BtnCreateNewUser,
  HeaderTitle,
  TitleModal,
  ContainerModal,
} from './style'

interface IsOPen {
  closeModalCopm: () => void
  TextButton: string
  conteudo: any
  TxtTitle: string
  submitAction: (e: any) => void
}

export default function Modal({
  closeModalCopm,
  TextButton,
  TxtTitle,
  conteudo,
  submitAction,
}: IsOPen) {
  return (
    <ContainerModal>
      <ViewModal>
        {' '}
        <ViewBtnExit>
          <BtnExit onClick={closeModalCopm}>x</BtnExit>
        </ViewBtnExit>
        <HeaderTitle>
          <TitleModal>{TxtTitle}</TitleModal>
        </HeaderTitle>
        <ContainerForm onSubmit={submitAction}>
          {conteudo}

          <BtnCreateNewUser>{TextButton}</BtnCreateNewUser>
        </ContainerForm>
      </ViewModal>
    </ContainerModal>
  )
}
