const Label = ({ children, labelFor, className = 'text-black-50' }) => (
  <label
    htmlFor={labelFor}
    className={`font-roboto font-normal text-1xl ${className}`}
  >
    {children}
  </label>
)

export default Label
