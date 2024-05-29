import { NavLink } from 'react-router-dom'
import { Button } from './Button'
import { useAuth } from '../../auth/AuthContext'

export function NavBar () {
  const { logout } = useAuth()

  return (
    <nav className='flex justify-between items-center p-4 bg-blue-800 text-white'>
      <h1 className='text-2xl'>Logo</h1>
      <ul className='flex gap-4 items-center'>
        <NavLink to='/home' className='hover:underline font-semibold'>Home</NavLink>
        <NavLink to='/programador' className='hover:underline font-semibold'>Programar Turno</NavLink>
        <NavLink to='/puntos' className='hover:underline font-semibold'>Sucursales</NavLink>
        <Button onClick={logout}>Cerrar Sesión</Button>
      </ul>
    </nav>
  )
}
