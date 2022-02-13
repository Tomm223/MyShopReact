import React from "react";

export const PagesContext = React.createContext()

function PagesProvider({ children }) {
   const pageY0 = () => document.documentElement.scrollTop = 0
   return (
      <PagesContext.Provider value={{ pageY0 }}>
         {children}
      </PagesContext.Provider>
   )
}

export default PagesProvider
