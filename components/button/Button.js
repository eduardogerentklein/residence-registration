const Button = ({
  children,
  onClick,
  type = 'button',
  className = 'text-primary',
  disabled = false
}) => (
  <button
    type={type}
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button
