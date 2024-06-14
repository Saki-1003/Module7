'use client'
import {useState} from 'react'

export default function useFormData() {
  
  const [value, setValue] = useState('')

  function handleSetValue(e) {
    e.preventDefault()
    setValue(e.target.value)
  }

  function reset() {
    setValue('')
  }

  const inputProps = {
    value: value,
    onChange: handleSetValue
  }

  return [inputProps, reset]

}