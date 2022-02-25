import React from "react";
import { useState } from "react";
export const PagesContext = React.createContext()

function PagesProvider({ children }) {
   const pageY0 = () => document.documentElement.scrollTop = 0
   const [tabs, setTabs] = useState(null)
   return (
      <PagesContext.Provider value={{ pageY0, tabs, setTabs }}>
         {children}
      </PagesContext.Provider>
   )
}

export default PagesProvider
