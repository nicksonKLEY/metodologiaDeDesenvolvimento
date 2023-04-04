import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import SingIn from '../pages/SignIn'
import Error404 from '../components/Erro404'
import RouteWrapper from './index'

import RegisterEmployee from '../pages/Dashboard/RegisterUser/index'
export default function RoutesAppPrivate() {
  return (
    <BrowserRouter>
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
        <Route
          path="/dashboard"
          element={
            <RouteWrapper>
              <Dashboard />
            </RouteWrapper>
          }
        />
        <Route
          path="/registerEmployee"
          element={
            <RouteWrapper>
              <RegisterEmployee />
            </RouteWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
