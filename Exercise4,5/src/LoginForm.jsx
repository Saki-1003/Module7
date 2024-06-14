import useLoginForm from './Hooks/useLoginForm'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from './Context/UserContext'
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function LoginForm() {

  const [nameInputProps, resetName] = useLoginForm('')
  const [emailInputProps, resetEmail] = useLoginForm('')
  const {userDetail, handleUpdateUser} = useContext(UserContext)
  const navigate = useNavigate()

  function handleSubmit() {
    resetName('')
    resetEmail('')
    handleUpdateUser({
      name: nameInputProps.value,
      email: emailInputProps.value
    })
    if (nameInputProps.value && emailInputProps.value){
      navigate('/Bitcoin')
    }
  }

  return(
    <>
      <h3>Login Page</h3>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <BasicTextFields label="Name"></BasicTextFields> */}
      <TextField {...nameInputProps} id="outlined-basic" label="Name" variant="outlined" /><br />
      <TextField {...emailInputProps} id="outlined-basic" label="Email" variant="outlined" />
    </Box>
      <Button onClick={handleSubmit} variant="outlined" sx={{width: 100}}>Submit</Button>

      {/* <label>Name:
        <input type="text" {...nameInputProps} />
      </label><br />
      <label>Email:
        <input type="email" {...emailInputProps} />
      </label><br />
      <button onClick={handleSubmit}>Submit</button><br /> */}
 
    </>

  )
}