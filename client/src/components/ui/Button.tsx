import { ButtonHTMLAttributes, JSX } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button ({ children, ...props }: Props): JSX.Element {
  return (
    <button className='p-2 shadow-md bg-blue-400 rounded-md font-semibold text-white hover:bg-green-500 transition-all duration-300 ease-in-out' {...props}>
      {children}
    </button>
  )
}
