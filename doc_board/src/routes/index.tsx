import React from 'react'
import { Navigate } from 'react-router-dom'
// import { AuthContext } from '../contexts/auth'
// import { useContext } from 'react'

interface PrivateRouterProps {
  children: React.ReactNode
}
const RouteWrapper: React.FC<PrivateRouterProps> = ({ children }) => {
  // const loading = false
  // const { signed, loading } = useContext(AuthContext)
  const signed = true
  return signed ? <div>{children}</div> : <Navigate to="/" />
}
export default RouteWrapper
