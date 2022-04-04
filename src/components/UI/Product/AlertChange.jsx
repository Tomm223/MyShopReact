import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import classes from './alert.module.scss'


export function AlertToAccount() {
   const location = useLocation()
   const alert = useSelector(state => state.product.alert)

   const toBranch = () => alert.branch ? `/account/${alert.branch}` : "/"
   console.log(toBranch());



   return (
      <>
         <div className={`${classes.alert} alert alert-dark`} role="alert">
            <div class="person-acc__title">
               <img src="/img/page-icon/vesh-logo2.png" alt="logo" />
            </div>
            <div className={`${classes.alert__container}`}>
               <div className={`${classes.alert__list} list-group list-group-flush`}>
                  <h2 className={"list-group-item"}>{alert.name}</h2>
                  <h2 className={"list-group-item"}>Цена: {alert.price}</h2>
                  <div className="list-group-item">
                     <h2>Куда добавлена:</h2>
                     <div className={classes.alert__list_link}>
                        <NavLink className={`${classes.alert__link}`} to={toBranch()} state={{ from: location }}>{alert.branch}</NavLink>
                     </div>
                  </div>

               </div>
               <div className={`${classes.alert__block}`}>
                  <img className={`${classes.alert__img}`} src={alert.img} alt="" />
               </div>
            </div>

         </div >
      </>

   )
}