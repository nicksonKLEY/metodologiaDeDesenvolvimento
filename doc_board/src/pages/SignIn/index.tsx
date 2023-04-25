import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
import { useNavigate } from 'react-router-dom'

export default function SingIn() {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  // const { signed } = useContext(AuthContext)
  const users = ['angeluz', 'marlison', 'josias']
  function HandleLogin(e: { preventDefault: () => void }) {
    e.preventDefault()
    // se o um dos campos estiver vázio
    if (password === '' || user === '') {
      toast.warning('Preencha todos os campos!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      })
      return
    }
    // se o login(senha ou usuario) estiver incorreto
    if (password !== '12345' || !user) {
      toast.error('Usuário ou Senha inválidos!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      })
      return
    }
    if (password === '12345' && user === users[0]) {
      // se o login estiver correto
      navigate('/registerEmployee')

      toast.success(`Bem-vindo ${user}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      })
    }
    if (password === '12345' && user === users[1]) {
      navigate('/typist')

      toast.success(`Bem-vindo ${user}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      })
    }
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
      <ToastContainer />
    </Container>
  )
}
