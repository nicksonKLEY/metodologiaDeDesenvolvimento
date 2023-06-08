import { ReactNode } from 'react'
import * as S from './style'

interface IsOPen {
  closeModalCopm: () => void
  TextButton: string
  conteudo: ReactNode
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
    <S.ContainerModal>
      <S.ViewModal>
        {' '}
        <S.ViewBtnExit>
          <S.BtnExit onClick={closeModalCopm} size={26} />
        </S.ViewBtnExit>
        <S.HeaderTitle>
          <S.TitleModal>{TxtTitle}</S.TitleModal>
        </S.HeaderTitle>
        <S.ContainerForm>
          {conteudo}

          <S.BtnCreateNewUser type="submit" onClick={submitAction}>
            {TextButton}
          </S.BtnCreateNewUser>
        </S.ContainerForm>
      </S.ViewModal>
    </S.ContainerModal>
  )
}
