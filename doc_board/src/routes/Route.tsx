import { BrowserRouter } from 'react-router-dom'
import SignIn from '../pages/SignIn'

import { TypistRoutes } from './typistRoutes'
import { MasterRouter } from './masterRouter'
import { SellerRoutes } from './sellerRoutes'
import { useAuthContext } from '../hooks/authContext'
import { AuthRoutes } from './authRoutes'

export default function RoutesAppPrivate() {
  const { userLogged, isLoading } = useAuthContext()

  if (isLoading) {
    return <div style={{ backgroundColor: '#000' }}>Carregando...</div>
  }

  // if (userLogged.length === 0) {
  //   return (
  //     <BrowserRouter>
  //       <AuthRoutes />
  //     </BrowserRouter>
  //   )
  // }

  return (
    <BrowserRouter>
      {userLogged.length === 0 ? (
        <AuthRoutes />
      ) : userLogged.acessLevel === 'Vendedor' ? (
        <SellerRoutes />
      ) : userLogged.acessLevel === 'Digitador' ? (
        <TypistRoutes />
      ) : (
        <MasterRouter />
      )}
    </BrowserRouter>
  )
}
