import { Navigate, Outlet } from 'react-router-dom'
import { type FC } from 'react'
import { NavBar } from './NavBar'

interface ProtectedRouteProps {
  redirectTo?: string
  isAllowed: boolean
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAllowed, redirectTo = '/home' }) => {
  if (isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return (
    <section className='flex w-screen h-screen'>
      <NavBar />
      <Outlet />
    </section>
  )
}
