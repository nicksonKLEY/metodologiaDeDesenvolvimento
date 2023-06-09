import { BrowserRouter } from 'react-router-dom'
import SignIn from '../pages/SignIn'

import { TypistRoutes } from './typistRoutes'
import { MasterRouter } from './masterRouter'
import { SellerRoutes } from './sellerRoutes'
import { useAuthContext } from '../hooks/authContext'

export default function RoutesAppPrivate() {
  const { userLogged, isLoading } = useAuthContext()

  if (isLoading) {
    return <div style={{ backgroundColor: '#000' }}>Carregando...</div>
  }

  if (userLogged.length === 0) {
    return <SignIn />
  }

  return (
    <BrowserRouter>
      {userLogged.acessLevel === 'Vendedor' ? (
        <SellerRoutes />
      ) : userLogged.acessLevel === 'Digitador' ? (
        <TypistRoutes />
      ) : (
        <MasterRouter />
      )}
    </BrowserRouter>
  )
}
