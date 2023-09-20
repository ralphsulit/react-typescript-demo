type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  const { value, handleChange } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  return (
    <>
      <input type="text" value={value} onChange={handleInputChange} />
    </>
  )
}