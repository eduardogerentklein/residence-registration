const Button = ({
  children,
  onClick,
  type = 'button',
  className = 'text-primary'
}) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
)

export default Button
