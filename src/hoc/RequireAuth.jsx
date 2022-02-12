import Rreact, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../components/Context/AuthProvider";
import useAuth from "../hook/useAuth";

function RequireAuth({ children }) {

   const location = useLocation()
   const { value } = useAuth()
   const user = value.user
   console.log("user: ", user);
   if (!user) {
      return <Navigate to='/registration' state={{ from: location }} ></Navigate>
   }
   return (
      <>
         {children}
      </>


   )
}

export default RequireAuth