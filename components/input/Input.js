import Label from '../typography/Label'

const Input = ({
  onChange,
  placeholder,
  name,
  disabled = false,
  value,
  type = 'text',
  className = '',
  required = false,
  label = ''
}) => {
  const handleChange = e => {
    if (onChange) onChange(e.target)
  }

  return (
    <div className='flex flex-col space-y-1'>
      {label && (
        <Label labelFor='CEP'>
          {label}
          {required && <Label className='text-red-75'>&nbsp;*</Label>}
        </Label>
      )}
      <input
        value={value}
        required={required}
        name={name}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={`text-3xl border border-black-25 focus:outline-none focus:ring focus:border-primary-hover rounded rounded-md py-2 px-3 ${className}`}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input
