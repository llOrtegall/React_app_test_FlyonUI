import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()

    axios.post('/api/v1/login', { username, password })
      .then(res => {
        console.log(res.data)
        if (res.data.auth === true) {
          navigate('/')
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <section className='w-screen h-screen flex items-center justify-center'>

      <form className='flex flex-col gap-4 px-20 py-16 bg-blue-200 rounded-lg' onSubmit={handleSubmit}>
        <figure className='flex justify-center'>
          <img src='/vite.svg' alt='logo' width={90} />
        </figure>
        <input
          type='text' placeholder='username' onChange={ev => setUsername(ev.target.value)}
          className='p-2 rounded-md outline-none' required autoComplete='username'
        />
        <input
          type='password' placeholder='Password' onChange={ev => setPassword(ev.target.value)}
          className='p-2 rounded-md outline-none' required
        />
        <button type='submit' className='bg-green-500 text-white font-semibold px-4 py-2 rounded-md'>Login</button>
      </form>

    </section>
  )
}

export default Login
