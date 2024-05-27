import { NavLink } from 'react-router-dom'

export function NavBar () {
  return (
    <nav className='flex justify-between items-center p-4 bg-blue-400 text-white'>
      <h1 className='text-2xl'>Logo</h1>
      <ul className='flex gap-4'>
        <NavLink to='/' className='hover:underline'>Home</NavLink>
        <NavLink to='/programador' className='hover:underline'>Programar Turno</NavLink>
      </ul>
    </nav>
  )
}
