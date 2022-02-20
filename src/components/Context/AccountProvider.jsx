import React, { useState } from "react";

export const AccountContext = React.createContext()

function AccountProvider({ children }) {
   const [cabInfo, setCabInfo] = useState(JSON.parse(localStorage.getItem("userChange")))

   const getUserChange = (obj) => {
      localStorage.setItem("userChange", JSON.stringify(obj))
      setCabInfo(prev => null)
      setCabInfo(prev => JSON.parse(localStorage.getItem("userChange")))
   }
   const ChangeUserOut = () => {
      setCabInfo(null)
      localStorage.setItem("userChange", JSON.stringify(null))
   }
   const postUserChange = () => {

   }
   return (
      <AccountContext.Provider value={{ cabInfo, ChangeUserOut, getUserChange }}>
         {children}
      </AccountContext.Provider>
   )
}

export default AccountProvider
