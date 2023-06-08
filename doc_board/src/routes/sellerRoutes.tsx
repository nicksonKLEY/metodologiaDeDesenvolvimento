import { Routes, Route } from 'react-router-dom'

import Seller from '../pages/Seller'
import RouteWrapper from '.'
import Error404 from '../components/Erro404'

export function SellerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Seller />} />
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
