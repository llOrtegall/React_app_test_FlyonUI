import { NavBar } from '../components/NavBar'

const Home = (): JSX.Element => {
  return (
    <section className='flex w-screen h-screen'>
      <nav className='bg-violet-300 w-[20vw]'>
        <NavBar />
      </nav>
      <main className='bg-gray-200 w-[80vw]'>
        Example
      </main>
    </section>
  )
}

export default Home
