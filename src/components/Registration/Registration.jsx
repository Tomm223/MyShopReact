import React, { useContext, useEffect, useRef, useState } from "react";
import { PagesContext } from "../Context/PagesProvider";
import { useLocation, useNavigate, Outlet, NavLink } from 'react-router-dom'
import useAuth from "../../hook/useAuth"
function Registration() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])


   //navigate
   const location = useLocation()
   const navigate = useNavigate()
   const FromPage = location.state?.from?.pathname || "/"

   return (

      <div class="registration-body">
         <div class="reg">
            <div class="reg__title">
               <img src="/img/page-icon/vesh-logo.png" alt="" />
            </div>
            <div class="reg__block">
               <div class="reg__checkout">
                  <NavLink to="post" className="reg__checkout-item ">
                     <p className='reg__checkout-link'>Регестрация</p>
                  </NavLink>
                  <NavLink to="get" className="reg__checkout-item">
                     <p class="reg__checkout-link">Вход</p>
                  </NavLink>
               </div>
               <Outlet />
            </div>
         </div>

      </div>

   )
}
export default Registration

/*  */