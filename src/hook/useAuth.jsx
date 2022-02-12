import React, { useContext, } from "react";
import { AuthContext } from "../components/Context/AuthProvider";

export default function useAuth() {

   return useContext(AuthContext)
}