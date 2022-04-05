import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import classes from './accountOut.module.scss'

export function AccountOut() {
   const navigate = useNavigate()
   const from = useSelector(state => state.pageFrom.location.pathname)
   const state = useSelector(state => state.pageFrom.location.state)
   const to = from ? from.includes("registration") || from.includes("account") ? 2 : from : '/' || '/'
   console.log(to);
   console.log("state: ", state);
   function Handle() {
      if (state) {
         if (from == '/product' || state?.from?.state?.product) {
            if ("product" in state) {
               navigate(to, { state: { product: state.product } })


            }
            else {

               navigate(to, { state: { product: state.from.state.product } })
            }
         }
         else if (from == '/cataloge' || state?.from?.state?.FilterSearch) {
            navigate(to)
         }
         else {
            navigate(state.from.pathname)
         }
      }
      else {
         navigate(to)
      }

   }
   return (
      <div className={classes.out}>
         <div onClick={Handle} className={`${classes.btn} `} >
            <div className={classes.blockImg}>
               <img className={classes.img} src="/img/page-icon/sign-out.png" alt="" />
            </div>
         </div>
      </div>

   )
}
export default AccountOut



/* onClick={() => navigate(to)} className={classes.out}


*/


//    1) ПЕРЕДЕЛАТЬ ПРОДУКТ НА URLSEARCH А НЕ LOCATION STATE
//    2) ПЕРЕДЕЛАТЬ ACC-OUT НА ПОЛУЧЕНИЕ FROM_LOCATION + SEARCH В НЕМ И ПО НЕМУ ПЕРЕХОД НА СТРАНИЦУ 