import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import SingIn from '../pages/SignIn'
import Error404 from '../pages/Erro404'
import RouteWrapper from './index'
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
      </Routes>
    </BrowserRouter>
  )
  // return(
  //   <BrowserRouter>
  //      <Routes>
  //          <Route path="/" element={<SingIn/>}/>
  //          <Route path="/dashboard" element={<Dashboard/>}/>
  //      </Routes>
  //   </BrowserRouter>
  // )
}
