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
  const [credentialsUser, setCredentialsUser] = useState<any>([])

  const navigate = useNavigate()

  const userParser = new UserParser()
  const connection = new FirebaseConnection(ConnectionPages.User)

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const select = new Read(connection, userParser)

  async function HandleLogin(e: FormEvent) {
    e.preventDefault()
    try {
      const filteredName = credentialsUser.find(
        (item: any) => item.name === user,
      )

      const filteredPassword = credentialsUser.find(
        (item: any) => item.password === password,
      )

      const filteredAccessLevel = credentialsUser.find(
        (item: any) => item.acessLevel === 'Vendedor',
      )

      const filteredAccessLevelTypist = credentialsUser.find(
        (item: any) => item.acessLevel === 'Digitador',
      )

      if (
        password === filteredPassword.password &&
        user === filteredName.name &&
        filteredAccessLevel.acessLevel === 'Vendedor'
      ) {
        navigate('/seller')

        toast.success(`Bem-vindo ${user}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        })
      } else if (
        password === filteredPassword.password &&
        user === filteredName.name &&
        filteredAccessLevelTypist.acessLevel === 'Digitador'
      ) {
        navigate('/typist')

        toast.success(`Bem-vindo ${user}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    async function load() {
      const result = await select.all()
      setCredentialsUser(result)
    }
    load()
  }, [])

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
