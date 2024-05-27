import { ProtectedRoute } from './components/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import axios from 'axios'
import Home from './pages/Home'
import Programador from './pages/ProgramarTurno'

axios.defaults.baseURL = 'http://localhost:5000'

function App () {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute isAllowed />}>
          <Route path='/' element={<Home />} />
          <Route path='/programador' element={<Programador />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
