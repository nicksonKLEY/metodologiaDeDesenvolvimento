import React, { ReactNode, useState, createContext, useEffect } from 'react'
// import { auth } from '../services/connection'
interface AuthContextProps {
  signed: boolean
  signIn: any
  user: any
  loading: boolean
}
interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(null)
  // const [loadingAuth, setLoadingAhth] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('@users')
      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }
    loadStorage()
  }, [])

  async function signIn(email: string, password: string) {
    //  setLoadingAhth(true)
  }

  return (
    // ´!!'convert para booleano //segundo user passa as informaces
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
