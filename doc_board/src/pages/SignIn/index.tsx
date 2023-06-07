import { FormEvent, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
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
// import { useNavigate } from 'react-router-dom'

export default function SingIn() {
  // const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth()

  // const { signed } = useContext(AuthContext)

  async function HandleLogin(e: FormEvent) {
    e.preventDefault()

    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        // Signed in
        const users = userCredential.user
        console.log(users)
        // ...
      })
      .catch((error) => {
        console.log(error)
      })

    console.log('jfskdjfasj')

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
