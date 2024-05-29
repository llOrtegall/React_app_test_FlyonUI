import { ProtectedRoute } from './components/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import axios from 'axios'
import Home from './pages/Home'
import Programador from './pages/ProgramarTurno'
import { useAuth } from './auth/AuthContext'
import { useEffect } from 'react'
import SucursalesPage from './pages/Sucursales'

axios.defaults.baseURL = 'http://localhost:5000'

function App () {
  const { login, logout } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('tokenTurnos')
    if (token !== null) {
      login(token)
    } else {
      // TODO: Si no encuentra el token en el local storage, redirigir a la página de login
      console.log('No Token')
      logout()
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute isAllowed />}>
          <Route path='/home' element={<Home />} />
          <Route path='/programador' element={<Programador />} />
          <Route path='/puntos' element={<SucursalesPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
