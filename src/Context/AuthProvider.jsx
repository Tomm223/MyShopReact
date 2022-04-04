import React, { useState, createContext, useEffect, useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { UserInit } from "../Redux/actions/UserActions";

export const AuthContext = createContext()

export function AuthProvider({ children }) {
   const navigate = useNavigate()
   const [fromPage, setFromPage] = useState('/')
   const [stateNavTo, setStateNavTo] = useState({})

   const NavigateTo = () => navigate(fromPage, { state: { ...stateNavTo } })


   const dispatch = useDispatch()
   const singIn = useCallback((us, Callback) => {
      localStorage.setItem("auth", JSON.stringify(us))
      dispatch(UserInit(us))
      //setUser(prev => JSON.parse(localStorage.getItem("auth")))
      Callback()

   }, [])
   const AuthOut = useCallback((Callback) => {
      dispatch(UserInit(null))
      //setUser(prev => null)
      localStorage.setItem("auth", JSON.stringify(null))
   }, [])

   return (
      <AuthContext.Provider value={{ setStateNavTo, NavigateTo, AuthOut, singIn, fromPage, setFromPage }}>
         {children}
      </AuthContext.Provider>
   )
}


