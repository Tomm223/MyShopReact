import React, { useState, createContext, useEffect, useCallback, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export function AuthProvider({ children }) {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem("auth")))
   const [fromPage, setFromPage] = useState('/')
   const singIn = useCallback((us, Callback) => {
      setUser(prev => null)
      localStorage.setItem("auth", JSON.stringify(us))
      setUser(prev => JSON.parse(localStorage.getItem("auth")))
      Callback()

   }, [])
   const AuthOut = useCallback((Callback) => {
      setUser(prev => null)
      localStorage.setItem("auth", JSON.stringify(null))
   }, [])

   return (
      <AuthContext.Provider value={{ user, AuthOut, singIn, fromPage, setFromPage }}>
         {children}
      </AuthContext.Provider>
   )
}


