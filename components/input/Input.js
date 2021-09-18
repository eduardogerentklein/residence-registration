const Input = ({
  onChange,
  placeholder,
  name,
  disabled = false,
  type = 'text',
  className = ''
}) => {
  const handleChange = e => {
    if (onChange) onChange(e.target)
  }

  return (
    <>
      <input
        name={name}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={`text-3xl border border-black-25 focus:outline-none focus:ring focus:border-primary-hover rounded rounded-md py-2 px-3 ${className}`}
        onChange={handleChange}
      />
    </>
  )
}

export default Input
