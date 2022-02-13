import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthProvider";
import useAuth from "../hook/useAuth";

function RequireAuth({ children }) {

   const location = useLocation()
   const user = true
   if (!user) {
      return <Navigate to='/registration/post' state={{ from: location }} ></Navigate>
   }
   return (
      <>
         {children}
      </>


   )
}

export default RequireAuth