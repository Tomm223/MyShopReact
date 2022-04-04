import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AccountChange({ children }) {
   const account = useSelector(state => state.account)
   const basket = useSelector(state => state.account.basket)
   const orders = useSelector(state => state.account.orders)
   const likes = useSelector(state => state.account.likes)
   useEffect(() => {
      localStorage.setItem("AccountProduct", account)
   }, [basket, orders, likes])

   return (
      <>
         {children}
      </>

   )
}