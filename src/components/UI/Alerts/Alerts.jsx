import React from "react";
import classes from './alert.module.scss'

export function AlertDefault({ state, setState }) {
   if (state) {
      setTimeout(() => {
         setState(false)
      }, 1500)
   }

   return (
      <div className={`${classes.alert} alert alert-primary`} role="alert" >
         {state}
      </div >
   )
}