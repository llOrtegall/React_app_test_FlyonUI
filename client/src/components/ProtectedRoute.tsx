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
    </>
  )
}
