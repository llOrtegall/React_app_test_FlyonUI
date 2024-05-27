import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App () {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<div>Home</div>} />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </>
  )
}

export default App
