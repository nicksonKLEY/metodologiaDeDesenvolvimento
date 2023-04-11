import React, { useState } from 'react'
import {
  Container,
  ViewSingIn,
  Input,
  Logo,
  ViewInput,
  ColorIcon,
  BtnAcess,
} from './style'

import LogoImg from '../../assets/imgs/logo.png'
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'

export default function SingIn() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  // const users = [
  //   { user: 'admin', password: '123456' },
  //   { user: 'seller', password: '123456' },
  //   { user: 'typist', password: '123456' },
  // ]

  // const { signed } = useContext(AuthContext)

  function HandleLogin(e: { preventDefault: () => void }) {
    e.preventDefault()
    alert('teste')
  }

  return (
    <Container>
      <ViewSingIn onSubmit={HandleLogin}>
        <Logo src={LogoImg} />

        <ViewInput>
          <AiOutlineUser color={ColorIcon} size={20} />
          <Input
            value={user}
            type="text"
            placeholder="Usuário"
            onChange={(e) => setUser(e.target.value)}
          />
        </ViewInput>

        <ViewInput>
          <RiLockPasswordFill color={ColorIcon} size={20} />
          <Input
            value={password}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </ViewInput>

        <BtnAcess type="submit">Entrar</BtnAcess>
      </ViewSingIn>
    </Container>
  )
}
