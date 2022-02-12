import React, { useState, createContext } from "react";

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
   const [user, setUser] = useState(null)
   const singin = (newUser, callBack) => {
      setUser(newUser)
      callBack()
   }
   const singout = (callBack) => {
      setUser(null)
      callBack()

   }

   const value = { user, singin, singout }

   return (
      <AuthContext.Provider value={{ value }}>
         {children}
      </AuthContext.Provider>
   )
}


