interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export function Input (props: InputProps) {
  return(
    <input 
      type="text"
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
      {...props}
    />
  )
}
