const Button = ({ children, onClick, className = 'text-primary' }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
)

export default Button
