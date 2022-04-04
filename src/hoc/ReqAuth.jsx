import React, { useContext, useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { AccountContext } from "../Context/AccountProvider";
import { useSelector } from "react-redux";

export function ReqAuthAcc({ children }) {

   const location = useLocation()
   //const { user } = useContext(AuthContext)
   const user = useSelector(state => state.user.user)
   if (user == null) {
      return <Navigate to='/registration/get' state={{ from: location }} ></Navigate>
   }
   //chekID USER


   return (
      <>
         {children}
      </>


   )
}
export function ReqAuthReg({ children }) {

   const location = useLocation()
   const user = useSelector(state => state.user.user)
   if (user != null) {
      return <Navigate to='/account/info' state={{ from: location }} ></Navigate>
   }
   return (
      <>
         {children}
      </>


   )
}


