const Input = ({
  handleChange,
  placeholder,
  type = 'text',
  className = ''
}) => {
  const onChange = e => {
    if (handleChange) handleChange(e.target.value)
  }

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`text-3xl border border-black-25 rounded rounded-md p-2 ${className}`}
        onChange={onChange}
      />
      <style jsx>
        {`
          input:focus {
            border: 1px solid #5c82f6;
          }
        `}
      </style>
    </>
  )
}

export default Input
