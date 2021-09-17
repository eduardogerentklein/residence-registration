const Input = ({
  handleChange,
  placeholder,
  disabled = false,
  type = 'text',
  className = ''
}) => {
  const onChange = e => {
    if (handleChange) handleChange(e.target.value)
  }

  return (
    <>
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={`text-3xl border border-black-25 focus:outline-none focus:ring focus:border-primary-hover rounded rounded-md py-2 px-3 ${className}`}
        onChange={onChange}
      />
    </>
  )
}

export default Input
