import { Navigate, Outlet } from 'react-router-dom'
import { NavBar } from './ui/NavBar'

interface Props {
  isAllowed: boolean,
  redirectTo?: string
}

export function ProtectedRoute ({ isAllowed, redirectTo = '/' }: Props) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return (
    <>
      <NavBar />
      <Outlet />

      <div className='text-black absolute bottom-0 left-0 '>
        <p className='font-semibold dark:text-white'>Database:
          <span className='text-red-500'> Multired </span>
        </p>
      </div>
    </>
  )
}
