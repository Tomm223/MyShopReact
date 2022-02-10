import React, { useContext } from "react";
import Header from "./header/Header"
import Footer from "./Footer"

import { Outlet } from 'react-router-dom'
import ThemeContext from "./Context/ThemeContext";
function Layout() {
   const { theme, setTheme } = useContext(ThemeContext)
   setTheme('defaulte')
   console.log(theme);
   return (
      <React.Fragment>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </React.Fragment>

   )
}
export default Layout 