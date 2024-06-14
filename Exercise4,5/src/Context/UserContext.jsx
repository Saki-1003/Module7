import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({})

export function UserProvider(props) {

  const [userDetail, setUserDetail] = useState({})

  function handleUpdateUser(user) {
    setUserDetail(user)
  }

  return(
    <UserContext.Provider value={{userDetail, handleUpdateUser}}>
      {props.children}
    </UserContext.Provider>
  )

}