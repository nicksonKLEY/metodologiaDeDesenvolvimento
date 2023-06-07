import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from '../components/Erro404'
import RouteWrapper from './index'
import EmployeePerformance from '../pages/Dashboard/EmployeePerformace'
import RegisterEmployee from '../pages/Dashboard/RegisterUser/index'

import Seller from '../pages/Seller'
import SingIn from '../pages/SignIn'
import Typist from '../pages/Typist'

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
          path="/registerEmployee"
          element={
            <RouteWrapper>
              <RegisterEmployee />
            </RouteWrapper>
          }
        />
        <Route
          path="/EmployeePerfomance"
          element={
            <RouteWrapper>
              <EmployeePerformance />
            </RouteWrapper>
          }
        />

        <Route
          path="/seller"
          element={
            <RouteWrapper>
              <Seller />
            </RouteWrapper>
          }
        />

        <Route
          path="/typist"
          element={
            <RouteWrapper>
              <Typist />
            </RouteWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
