const LoginForm = (): JSX.Element => {
  return (
    <section className="h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-sky-600 to-blue-300">
      <form className='w-[385px] mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-6 shadow-xl' >

        <figure className='flex items-center justify-center'>
          <img src="/gane.webp" alt="logo de gane" className='w-[160px] ' />
        </figure>

        <article className='flex flex-col gap-1'>
          <label>Usuario: </label>
          <div className='flex items-center gap-2 w-full justify-around px-2'>

            <input name='username' type='text' placeholder='CP1118342523' required
            autoComplete='username' />
          </div>
        </article>

        <article className='flex flex-col gap-1'>
          <label>Contraseña:</label>
          <div className='flex items-center gap-2 w-full justify-around px-2'>

            <input name='contraseña' type='password' placeholder='***********' required
            autoComplete='contraseña' />
          </div>
        </article>

        <article className=''>
          <button>Iniciar Sesión</button>
        </article>

      </form >

    </section >
  )
}

export default LoginForm
