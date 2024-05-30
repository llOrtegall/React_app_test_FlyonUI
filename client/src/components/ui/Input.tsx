import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input ({ ...props }: Props) {
  return (
    <input
      className='p-2 rounded-md border-none bg-gray-100 dark:bg-gray-200 outline-none dark:text-black placeholder:text-slate-700'
      {...props}
    />
  )
}
