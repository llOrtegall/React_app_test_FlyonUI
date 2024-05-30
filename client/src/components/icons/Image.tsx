import React from 'react'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement>{}

export function Image ({ ...props }: Props) {
  return (
    <img {...props} className='w-20 xl:w-24 1xl:w-28 3xl:w-32' />
  )
}
