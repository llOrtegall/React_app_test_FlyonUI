interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label className='text-sm text-gray-900 font-semibold' {...props}>
      {children}
    </label>
  );
}