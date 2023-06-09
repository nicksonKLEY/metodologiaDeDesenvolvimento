import { Routes, Route } from 'react-router-dom'

import SingIn from '../pages/SignIn'
import RouteWrapper from '.'
import Error404 from '../components/Erro404'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route
        path="*"
        element={
          <RouteWrapper>
            <Error404 />
          </RouteWrapper>
        }
      />
    </Routes>
  )
}
