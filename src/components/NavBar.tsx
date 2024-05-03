import { RiCalendar2Line, RiUserLine, RiDashboardLine, RiCalendarScheduleLine } from '@remixicon/react'
import { NavLink } from 'react-router-dom'
import { Badge } from '@tremor/react'

export const NavBar = (): JSX.Element => {
  return (
    <nav className='min-w-80 bg-slate-300 h-screen'>
      <ul className='py-6 mb-12'>
        <figure className='flex w-full justify-center'>
          <img src="gane.webp" alt="Logo Gane" className='w-44' />
        </figure>
      </ul>

      <ul className='flex gap-2 flex-col px-4 py-2 '>
        <Badge size={'lg'} color='gray'>MENU</Badge>

        <li className='flex gap-3 items-center p-2 hover:bg-white cursor-pointer transition-all rounded-md'>
          <RiDashboardLine size={40} />
          <NavLink to={'/home'} className='text-xl font-semibold'>Dashboard</NavLink>
        </li>
        <li className='flex gap-3 items-center p-2 hover:bg-white cursor-pointer transition-all rounded-md'>
          <RiCalendar2Line size={40} />
          <NavLink to={'/'} className='text-xl font-semibold'>Calendario</NavLink>
        </li>
        <li className='flex gap-3 items-center p-2 hover:bg-white cursor-pointer transition-all rounded-md'>
          <RiUserLine size={40} />
          <NavLink to={'/'} className='text-xl font-semibold'>Perfiles</NavLink>
        </li>
        <li className='flex gap-3 items-center p-2 hover:bg-white cursor-pointer transition-all rounded-md'>
          <RiCalendarScheduleLine size={40} />
          <NavLink to={'/programer'} className='text-xl font-semibold'>Programar Turno</NavLink>
        </li>
      </ul>
    </nav>

  )
}
