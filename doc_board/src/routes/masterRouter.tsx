import { Routes, Route } from 'react-router-dom'
import RegisterEmployee from '../pages/Dashboard/RegisterUser'
import EmployeePerformance from '../pages/Dashboard/EmployeePerformace'
import RouteWrapper from '.'
import Error404 from '../components/Erro404'

export function MasterRouter() {
  return (
    <Routes>
      <Route path="/" element={<RegisterEmployee />} />
      <Route path="/EmployeePerfomance" element={<EmployeePerformance />} />
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
