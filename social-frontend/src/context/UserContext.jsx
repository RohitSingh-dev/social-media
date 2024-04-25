import { createContext, useState } from "react";

export const UserContext= createContext(null);

export const UserContextProvider= (props)=> {
    const [currentUser, setCurrentUser]= useState({user_name:"", user_id:"", user_token:""});
    return (
        <UserContext.Provider value={currentUser}>{props.children}</UserContext.Provider>
    )
}