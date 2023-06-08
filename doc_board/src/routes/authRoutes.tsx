import { Routes, Route } from 'react-router-dom'

import SingIn from '../pages/SignIn'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
    </Routes>
  )
}
