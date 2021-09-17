const Label = ({ children, labelFor, className = '' }) => (
  <label for={labelFor} className={`font-roboto font-bold text-1xl ${className}`}>
    {children}
  </label>
)

export default Label