import RoutesApp from './routes/Route'
import AuthProvider from './contexts/auth'
import './App.css'

export function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}
