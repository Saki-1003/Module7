import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext(); // this is the context

export const UserProvider = (props) => { //this is just a provider

  const [currentUser, setCurrentUser] = useState({});

  const handleUpdateUser = (user) => {
    setCurrentUser(user);
  }

  return (
    <UserContext.Provider value={{currentUser, handleUpdateUser}}>
      {props.children}
    </UserContext.Provider>
  );
}
