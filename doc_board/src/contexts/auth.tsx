import React, { ReactNode, useState, createContext } from 'react'

interface AuthContextProps {
  signed: () => void
  user: any
}
interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(false)

  function signed() {
    setUser(false)
  }

  return (
    // ´!!'convert para booleano //segundo user passa as informaces
    <AuthContext.Provider value={{ signed, user }}>
      {children}
    </AuthContext.Provider>
  )
}
