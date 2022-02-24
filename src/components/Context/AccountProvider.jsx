import React, { useState } from "react";

export const AccountContext = React.createContext()

function AccountProvider({ children }) {
   const [cabInfo, setCabInfo] = useState(JSON.parse(localStorage.getItem("userChange")))
   const [checkId, setCheckId] = useState(JSON.parse(localStorage.getItem("checkToken")))
   const usSetCheckId = (bull) => {
      setCheckId(prev => bull)
      localStorage.setItem("checkToken", JSON.stringify(bull))
      setCheckId(prev => JSON.parse(localStorage.getItem("checkToken")))
   }
   const outCheckId = () => {
      setCheckId(prev => null)
      localStorage.setItem("checkToken", JSON.stringify(null))
      setCheckId(JSON.parse(localStorage.getItem("chechToken")))
      localStorage.setItem("DELETEBasket", JSON.stringify(null))
      localStorage.setItem("DELETELikes", JSON.stringify(null))
      localStorage.setItem("ChangeBasket", JSON.stringify(null))
      localStorage.setItem("DELETEOrder", JSON.stringify(null))
      localStorage.setItem("ChangeLikes", JSON.stringify(null))
      localStorage.setItem("ChangeOrder", JSON.stringify(null))
   }
   const getChangeDef = (obj) => {
      localStorage.setItem("userChange", JSON.stringify(obj))
      setCabInfo(prev => null)
      setCabInfo(prev => JSON.parse(localStorage.getItem("userChange")))
   }
   const ChangeOutDef = () => {
      setCabInfo(null)
      localStorage.setItem("userChange", JSON.stringify(null))
   }
   const [orderPers, setOrderPers] = useState(JSON.parse(localStorage.getItem('ChangeOrder')) ? JSON.parse(localStorage.getItem('ChangeOrder')).reverse() : null)
   const [basketPers, setBasketPers] = useState(JSON.parse(localStorage.getItem('ChangeBasket')) ? JSON.parse(localStorage.getItem('ChangeBasket')).reverse() : null)
   const [likesPers, setLikesPers] = useState(JSON.parse(localStorage.getItem('ChangeLikes')) ? JSON.parse(localStorage.getItem('ChangeLikes')).reverse() : null)
   const usSetChangeOrder = (mass) => {
      //setOrderPers(prev => null)
      localStorage.setItem('ChangeOrder', JSON.stringify(mass))
      setOrderPers(prev => JSON.parse(localStorage.getItem('ChangeOrder')))
   }
   const usSetChangeBasket = (mass) => {
      //setBasketPers(prev => null)
      localStorage.setItem('ChangeBasket', JSON.stringify(mass))
      setBasketPers(prev => JSON.parse(localStorage.getItem('ChangeBasket')))
   }
   const usSetChangeLikes = (mass) => {
      //setLikesPers(prev => null)
      localStorage.setItem('ChangeLikes', JSON.stringify(mass))
      setLikesPers(prev => JSON.parse(localStorage.getItem('ChangeLikes')))
   }
   //delete
   const [deleteLikes, setDeleteLikes] = useState(JSON.parse(localStorage.getItem('DELETELikes')))
   const [deleteBasket, setDeleteBasket] = useState(JSON.parse(localStorage.getItem('DELETEBasket')))
   const [deleteOrder, setDeleteOrder] = useState(JSON.parse(localStorage.getItem('DELETEOrder')))
   const usSetDeleteLikes = (mass) => {
      //setDeleteLikes(prev => null)
      localStorage.setItem('DELETELikes', JSON.stringify(mass))
      setDeleteLikes(prev => JSON.parse(localStorage.getItem('DELETELikes')))
   }
   const usSetDeleteBasket = (mass) => {
      //setDeleteBasket(prev => null)
      localStorage.setItem('DELETEBasket', JSON.stringify(mass))
      setDeleteBasket(prev => JSON.parse(localStorage.getItem('DELETEBasket')))
   }
   const usSetDeleteOrder = (mass) => {
      //setDeleteOrder(prev => null)
      localStorage.setItem('DELETEOrder', JSON.stringify(mass))
      setDeleteOrder(prev => JSON.parse(localStorage.getItem('DELETEOrder')))
   }


   function AddTopDelBottom(to, usSet, prodAdd, toDel, usSetDel, delProd) {
      console.log(prodAdd);
      fetch(`http://localhost:3000/${to}`, {
         method: "POST",
         body: JSON.stringify(prodAdd),
         headers: {
            'Content-Type': 'application/json'
         }
      })
         .then(data => data.json())
         .then(PostDeleteItemChange(toDel, usSetDel, delProd))
         .then(ADDrenderProducts(to, usSet))
   }
   function PostDeleteItemChange(to, usSetDel, obj) {
      // ЗАЧЕМ НА ЭТОТ IFF СУКА ЕСЛИ obj === obj мб имел ввиду obj.products? ну такто до этого работала шняга а сейчас нет 
      if (obj.length) {
         obj.map((item) => {
            fetch(`http://localhost:3000/${to}`, {
               method: "POST",
               body: JSON.stringify(item),
               headers: {
                  'Content-Type': 'application/json'
               }
            })
               .then(data => data.json())
               .then(data => console.log(data))
               .then(DELETErenderProducts(to, usSetDel))
         })
      }
      else {
         fetch(`http://localhost:3000/${to}`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
               'Content-Type': 'application/json'
            }
         })
            .then(data => data.json())
            .then(data => console.log(data))
            .then(DELETErenderProducts(to, usSetDel))
      }

   }



   async function DELETErenderProducts(to, usSet) {
      if (checkId) {
         await fetch(`http://localhost:3000/${to}`)
            .then(data => data.json())
            .then(data => usSet(data))
            .then(data => console.log(to + "===" + data))
      }
   }
   async function ADDrenderProducts(to, usSet) {
      if (checkId) {
         await fetch(`http://localhost:3000/${to}`)
            .then(data => data.json())
            .then(data => usSet(data))
      }

   }
   return (
      <AccountContext.Provider value={{
         DELETErenderProducts, ADDrenderProducts,
         AddTopDelBottom, PostDeleteItemChange,
         deleteLikes, usSetDeleteLikes, deleteBasket, usSetDeleteBasket, deleteOrder, usSetDeleteOrder,
         orderPers, usSetChangeOrder, basketPers, usSetChangeBasket, likesPers, usSetChangeLikes, cabInfo,
         ChangeOutDef, getChangeDef, checkId, setCheckId, usSetCheckId, outCheckId
      }}>
         {children}
      </AccountContext.Provider>
   )
}

export default AccountProvider
