import { ProtectedRoute } from './components/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import axios from 'axios'
import Home from './pages/Home'
import Programador from './pages/ProgramarTurno'
import { useAuth } from './auth/AuthContext'
import { useEffect } from 'react'

axios.defaults.baseURL = 'http://localhost:5000'

function App () {
  const { login } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem('tokenTurnos')
    if (token !== null) {
      login(token)
    } else {
      console.log('No Token')
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoute isAllowed />}>
          <Route path='/home' element={<Home />} />
          <Route path='/programador' element={<Programador />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
