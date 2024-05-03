import { Link } from 'react-router-dom'

const NotFound = (): JSX.Element => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center pb-12 gap-2">
      <h1 className='text-2xl font-semibold text-red-600'>404 Not Found</h1>
      <Link to="/" className='p-2 rounded-md border hover:bg-green-200 hover:font-semibold transition-all'>Volver Al Inicio</Link>
    </div>
  )
}

export default NotFound
