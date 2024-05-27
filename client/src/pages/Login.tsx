function Login () {
  return (
    <section className='w-screen h-screen flex items-center justify-center'>
      <form className='flex flex-col gap-4 p-20 bg-blue-200'>
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    </section>
  )
}

export default Login
