import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
   const [user, setUser] = useState(localStorage.getItem("auth"))

   const AuthOut = () => setUser(null)

   useEffect(() => {
      localStorage.setItem('auth', user);
   }, [user])

   return (
      <AuthContext.Provider value={{ user, setUser, AuthOut }}>
         {children}
      </AuthContext.Provider>
   )
}


