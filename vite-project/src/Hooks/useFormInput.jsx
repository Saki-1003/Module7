import { useState } from "react";


export function useFormInput(initialValue) {

  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
   setValue(e.target.value);
  }

  const reset = () => setValue('');
 
  const inputProps = {
    value: value,
    onChange: handleChange
  };
 
  return [inputProps, reset]; // returns data to be used by a component
  }