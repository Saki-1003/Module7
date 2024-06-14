import { useState } from "react";
import { useFormInput } from "./Hooks/useFormInput";

import { useContext } from "react";
import { UserContext } from "./Context/UserProvider";

export default function SubscribeForm() {

  const [status, setStatus] = useState('');

  const [inputFirstNameProps, resetFirstName] = useFormInput('Mary');
  const [inputEmailProps, resetEmail] = useFormInput('mary@poppins.com');
  const [inputPasswordProps, resetPassword] = useFormInput('');
  const {currentUser, handleUpdateUser} = useContext(UserContext)

  // const handleNameChange = (e) => setFirstName(e.target.value);
  // const handleEmailChange = (e) => setEmail(e.target.value);
  

  function handleSubscribe() {
    if(currentUser) {
      resetFirstName()
      resetEmail()
      resetPassword()
      setStatus('Thanks for subscribing!')
    } else {
      setStatus('Please log in!')
    }

  }
  return (

  <div className="SubscribeForm componentBox">

    <label>First name:
    <input {...inputFirstNameProps}/>
    </label>

    <label>Email: 
    <input {...inputEmailProps}/>
    </label>

    <label>Password: 
    <input {...inputPasswordProps}/>
    </label>

    <button onClick={handleSubscribe}>Subscribe</button>
    <div>{status}</div>

  </div>
  );
  }