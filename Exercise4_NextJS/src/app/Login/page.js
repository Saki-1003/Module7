'use client'
import useFormData from "@/Hooks/useFormData"
import { useContext } from "react"
import { UserContext } from "@/Context/page"


export default function Login() {

  const [nameInputProps, resetName] = useFormData('')
  const [emailInputProps, resetEmail] = useFormData('')
  const {userDetail, handleUpdateUser} = useContext(UserContext)

  function handleSubmit(){
    resetName('')
    resetEmail('')
    handleUpdateUser({
      name: nameInputProps.value,
      email: emailInputProps.value
    })

  }

  return(
    <>
      <h2>Login Page</h2>
      <label>Name:
        <input type="text" {...nameInputProps}></input>
      </label>
      <label>Email:
        <input type="email" {...emailInputProps}></input>
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}