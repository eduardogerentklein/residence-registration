const TextButton = ({ children, size = 4, className = '' }) => {
  const sizes = {
    4: 'text-lg',
    3: 'text-1xl',
    2: 'text-2xl',
    1: 'text-3xl'
  }
  return (
    <span className={`font-roboto font-bold ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}

export default TextButton
