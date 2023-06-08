import { FormEvent, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'
import LogoImg from '../../assets/imgs/logo.png'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill, RiEyeFill, RiEyeOffFill } from 'react-icons/ri'

import { useAuthContext } from '../../hooks/authContext'

export default function SingIn() {
  const [eye, setEye] = useState('password')

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const { singIn } = useAuthContext()

  async function HandleLogin(e: FormEvent) {
    e.preventDefault()

    singIn(user, password)
  }

  return (
    <S.Container>
      <S.ViewSingIn onSubmit={HandleLogin}>
        <S.Logo src={LogoImg} />

        <S.ViewInput>
          <MdEmail color={S.ColorIcon} size={20} />
          <S.Input
            value={user}
            type="text"
            placeholder="Email"
            onChange={(e) => setUser(e.target.value.toLocaleLowerCase())}
          />
        </S.ViewInput>

        <S.ViewInput>
          <RiLockPasswordFill color={S.ColorIcon} size={20} />
          <S.InputPassword
            value={password}
            type={eye}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          {eye === 'password' ? (
            <RiEyeFill
              cursor={'pointer'}
              onClick={() => setEye('text')}
              color={S.ColorIcon}
              size={20}
            />
          ) : (
            <RiEyeOffFill
              cursor={'pointer'}
              onClick={() => setEye('password')}
              color={S.ColorIcon}
              size={20}
            />
          )}
        </S.ViewInput>

        <S.BtnAcess type="submit">Entrar</S.BtnAcess>
      </S.ViewSingIn>
      <ToastContainer />
    </S.Container>
  )
}
