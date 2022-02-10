import React from "react";
import { NavLink } from "react-router-dom";
function AccountNavigate({ link }) {
   const setStyle = ({ isActive }) => isActive ? `cab__list-item  active  ${link.dopStyle} ` : `cab__list-item  ${link.dopStyle} `
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