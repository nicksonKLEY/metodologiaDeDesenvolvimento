import { ReactNode, createContext, useEffect, useState } from 'react'

import { Read } from '../services/UseCases/Read'
import { UserParser } from '../services/Connection/Firebase/Parsers/UserParser'
import { FirebaseConnection } from '../services/Connection/Firebase/FirebaseConnection'
import ConnectionPages from '../services/Connection/ConnectionPages'
import { toast } from 'react-toastify'

interface AuthContextProps {
  singIn: (user: string, password: string) => any
  signOut: () => any
  userLogged: any
  isLoading: boolean
}
interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export default function AuthProvider({ children }: AuthProviderProps) {
  const [credentialsUser, setCredentialsUser] = useState<any>([])
  const [userLogged, setUserLogged] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)

  const userParser = new UserParser()
  const connection = new FirebaseConnection(ConnectionPages.User)
  const select = new Read(connection, userParser)

  function singIn(user: string, password: string) {
    try {
      const filteredUser = credentialsUser.find(
        (item: any) => item.name === user && item.password === password,
      )

      if (filteredUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(filteredUser))
        setUserLogged(filteredUser)
      } else {
        toast.error('Usuário ou senha inválidos')
      }
    } catch (error) {}
  }

  function signOut() {
    localStorage.removeItem('loggedInUser')
    setUserLogged([])
  }

  useEffect(() => {
    async function load() {
      const result = await select.all()
      setCredentialsUser(result)
    }
    load()
  }, [])

  async function fetchDataUser() {
    try {
      setIsLoading(true)
      const loggedInUser = localStorage.getItem('loggedInUser')
      if (loggedInUser) {
        const user = JSON.parse(loggedInUser)
        setUserLogged(user)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDataUser()
  }, [])

  return (
    <AuthContext.Provider value={{ singIn, userLogged, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
