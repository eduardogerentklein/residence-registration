const Subtitle = ({ children, className = 'text-black-75' }) => (
  <h2 className={`font-roboto font-medium text-2xl ${className}`}>
    {children}
  </h2>
)

export default Subtitle
