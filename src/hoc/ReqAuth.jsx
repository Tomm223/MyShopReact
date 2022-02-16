import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthProvider";


export function ReqAuthAcc({ children }) {

   const location = useLocation()
   const { user } = useContext(AuthContext)
   console.log(user);
   if (user == null) {
      return <Navigate to='/registration/get' state={{ from: location }} ></Navigate>
   }
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


