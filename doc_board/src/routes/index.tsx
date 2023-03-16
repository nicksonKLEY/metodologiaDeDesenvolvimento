import { Navigate } from 'react-router-dom'

export default function RouteWrapper({ children }: any) {
  const loading = false
  const signed = true
  // const {signed} = useContext(AuthContext)

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
