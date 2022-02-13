import { info } from "node-sass";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
function AccountNavigate({ link }) {
   const setStyle = ({ isActive }) => isActive ? `cab__list-item  active  ${link.dopStyle} ` : `cab__list-item  ${link.dopStyle} `

   const { AuthOut } = useContext(AuthContext)
   /*if (link.alt == "out") {
      return (
         <NavLink onClick={AuthOut} to="/" className={setStyle}>
            <div className="cab__list-icon">
               <img src={link.img} alt={link.alt} />
            </div>
            <p className="cab__list-link">{link.name}</p>
         </NavLink>
      )
   }*/
   return (
      <NavLink to={link.alt} className={setStyle}>
         <div className="cab__list-icon">
            <img src={link.img} alt={link.alt} />
         </div>
         <p className="cab__list-link">{link.name}</p>
      </NavLink>
   )
}
export default AccountNavigate