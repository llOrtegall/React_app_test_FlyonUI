interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className='bg-blue-900 rounded-md text-white p-2 font-semibold hover:bg-blue-600' {...props}>
      {children}
    </button>
  );
}