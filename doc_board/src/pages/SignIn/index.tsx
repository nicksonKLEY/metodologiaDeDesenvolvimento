import { FormEvent, useEffect, useState } from 'react'
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
import { Read } from '../../services/UseCases/Read'
import { UserParser } from '../../services/Connection/Firebase/Parsers/UserParser'
import { FirebaseConnection } from '../../services/Connection/Firebase/FirebaseConnection'
import ConnectionPages from '../../services/Connection/ConnectionPages'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export default function SingIn() {
  const navigate = useNavigate()
  const userParser = new UserParser()
  const connection = new FirebaseConnection(ConnectionPages.User)

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const select = new Read(connection, userParser)
  useEffect(() => {
    async function load() {
      const result = await select.all()
      console.log(result)
    }
    load()
  }, [])

  async function HandleLogin(e: FormEvent) {
    e.preventDefault()
    try {
      const result = await select.all()
      console.log(result)
      if (password === result.password && user === result.name) {
        navigate('/registerEmployee')

        toast.success(`Bem-vindo ${user}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        })
      }
    } catch (error) {
      console.error(error)
    }

    // // se o um dos campos estiver vázio
    // if (password === '' || user === '') {
    //   toast.warning('Preencha todos os campos!', {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 3000,
    //   })
    //   return
    // }
    // // se o login(senha ou usuario) estiver incorreto
    // if (password !== '12345' || user !== 'angeluz') {
    //   toast.error('Usuário ou Senha inválidos!', {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 3000,
    //   })
    //   return
    // }
    // // se o login estiver correto
    // if (password === '12345' || user === 'angeluz') {
    //   navigate('/registerEmployee')

    //   toast.success(`Bem-vindo ${user}`, {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 3000,
    //   })
    // }
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
