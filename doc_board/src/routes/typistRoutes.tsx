import { Routes, Route } from 'react-router-dom'

import Typist from '../pages/Typist'
import RouteWrapper from '.'
import Error404 from '../components/Erro404'

export function TypistRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Typist />} />
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
