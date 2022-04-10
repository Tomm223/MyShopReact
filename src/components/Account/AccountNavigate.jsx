
import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AccountContext } from "../../Context/AccountProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { useWindowSize } from '../../hook/useWindowSize'
import { useDispatch } from "react-redux";
import { AccMiniOpen } from "../../Redux/actions/AccountActions";

function AccountNavigate({ link }) {
   const dispatch = useDispatch()
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon, minBigAcc } = useWindowSize()

   useEffect(() => {
      if (!minBigAcc) {

      }
   }, [minBigAcc])

   const setStyle = ({ isActive }) => isActive ? `cab__list-item  active  ${link.dopStyle} ` : `cab__list-item  ${link.dopStyle} `

   const { AuthOut } = useContext(AuthContext)
   function OutUser() {
      AuthOut()
   }
   if (link.alt == "out") {
      return (
         <NavLink onClick={OutUser} to="/" className={setStyle}>
            <div className="cab__list-icon">
               <img src={link.img} alt={link.alt} />
            </div>
            <p className="cab__list-link">{link.name}</p>
         </NavLink>
      )
   }
   return (
      <NavLink onClick={() => dispatch(AccMiniOpen())} to={link.alt} className={setStyle}>
         <div className="cab__list-icon">
            <img src={link.img} alt={link.alt} />
         </div>
         <p className="cab__list-link">{link.name}</p>
      </NavLink>
   )
}
export default AccountNavigate