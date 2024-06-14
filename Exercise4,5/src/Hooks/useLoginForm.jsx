import { useState } from 'react'

export default function useLoginForm() {

  const [value, setValue] = useState('')

  function handleChange(e) {
    e.preventDefault()
    setValue(e.target.value)
  }

  function reset() {
    setValue('')
  } 

  const inputProps = {
    value: value,
    onChange: handleChange
  }

  return [inputProps, reset]
  
}