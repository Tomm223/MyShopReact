import React, { useState } from "react";

export const AccountContext = React.createContext()

function AccountProvider({ children }) {
   const [cabInfo, setCabInfo] = useState()

   return (
      <AccountContext.Provider value={{ cabInfo, setCabInfo }}>
         {children}
      </AccountContext.Provider>
   )
}

export default AccountProvider
