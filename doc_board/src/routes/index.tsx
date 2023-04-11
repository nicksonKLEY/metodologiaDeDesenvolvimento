import { Navigate } from 'react-router-dom'
// import { AuthContext } from '../contexts/auth'
// import { useContext } from 'react'

export default function RouteWrapper({ children }: any) {
  const signed = true
  const loading = false
  // const { signed, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <div>
        <h1>TES</h1>
      </div>
    )
  }

  if (signed) {
    return children
  }
  if (!signed) {
    return <Navigate to="/" />
  }
}
