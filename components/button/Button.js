const Button = ({ children, onClick }) => (
  <button className='text-gray-600 dark:text-gray-300' onClick={onClick}>
    {children}
  </button>
)

export default Button
