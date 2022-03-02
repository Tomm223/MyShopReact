import React, { useContext, useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { AccountContext } from "../Context/AccountProvider";

export function ReqAuthAcc({ children }) {

   const location = useLocation()
   const { user } = useContext(AuthContext)
   const { setCheckId } = useContext(AccountContext)

   console.log(user);
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
   const { user } = useContext(AuthContext)
   if (user != null) {
      return <Navigate to='/account/info' state={{ from: location }} ></Navigate>
   }
   return (
      <>
         {children}
      </>


   )
}


