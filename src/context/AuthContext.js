import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { Value } from "sass";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
        })
    },[]);
    <AuthContextProvider value={{currentUser}}>
        {children}
    </AuthContextProvider>
}