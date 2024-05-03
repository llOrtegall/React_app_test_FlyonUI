import { Route, Routes } from 'react-router-dom'

import ProgramarTurno from './pages/ProgramarTurno'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import LoginForm from './pages/LoginForm'
import { ProtectedRoute } from './components/ProtectedRoutes'

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route element={<ProtectedRoute isAllowed={!true} redirectTo='/home' />} >
          <Route path='/home' element={<Home />} />
          <Route path='/programer' element={<ProgramarTurno />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  )
}

export default App
