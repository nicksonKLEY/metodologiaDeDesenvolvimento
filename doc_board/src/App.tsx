// import RoutesApp from './routes/Route'
import AuthProvider from './contexts/auth'
import './App.css'
import Seller from './pages/Seller'

export function App() {
  return (
    <AuthProvider>
      <Seller />
    </AuthProvider>
  )
}
