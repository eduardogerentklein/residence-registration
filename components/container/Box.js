const Box = ({ children, className = '' }) => (
  <div
    className={`m-4 md:mx-36 p-3 md:p-10 rounded rounded-lg border border-black-25 filter drop-shadow-lg shadow ${className}`}
  >
    {children}
  </div>
)

export default Box
