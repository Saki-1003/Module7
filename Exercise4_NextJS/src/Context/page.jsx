'use client'
import {useState, createContext} from 'react'


export const UserContext = createContext()

export function UserContextProvider(props) {

  const [userDetail, setUserDetail] = useState({})
  
  function handleUpdateUser(user) {
    setUserDetail(user)
  }

  return (
    <UserContext.Provider value={{userDetail, handleUpdateUser}}>
      {props.children}
    </UserContext.Provider>
  )
}