import { type Sucursal } from '../types/Sucursales'
import { JSX, useEffect, useState } from 'react'
import axios from 'axios'

function SucursalesPage (): JSX.Element {
  const [pdvs, setPdvs] = useState<Sucursal[]>()

  useEffect(() => {
    axios.get('/api/v1/pdvs')
      .then(response => {
        console.log(response.data)
        setPdvs(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>Sucursales</h1>
      <ul className='grid grid-cols-5 gap-2 p-2'>
        {pdvs?.map(pdv => (
          <li key={pdv.CODIGO} className='bg-gray-400'>
            <h2>{pdv.NOMBRE}</h2>
            <p>{pdv.CODIGO}</p>
            <p>{pdv.DIRECCION}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SucursalesPage
