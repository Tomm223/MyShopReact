import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AccountContext } from "../Context/AccountProvider";
import { AuthContext } from "../Context/AuthProvider";
import ProductsContext from "../Context/ProductsContext";
import AccountZakazMoreListItem from "./AccountZakazMoreListItem";
function AccountZakazMore() {
   const location = useLocation()
   const order = location.state
   console.log("order: ", order);
   const { products } = useContext(ProductsContext)
   // ПРОБЛЕМА С РАЗНЫМИ МЕСТАМИ USER INFO + YOUR CHANGE 
   /*
   const [userSearch, setUserSearch] = useState()
   console.log(userSearch);
   const { user } = useContext(AuthContext)
   useEffect(() => {
      fetch("https://localhost:3000/userCard")
         .then(data => data.json())
         .then(data => {
            setUserSearch(data.filter((item) => item.id == user))
         })
   }, [])*/

   return (
      <div class="cab__zakaz-more">
         <div class="cab__zakaz-more-icon">
            <img src="/img/page-icon/zakaz.png" alt="info" />
         </div>
         <div class="cab__zakaz-more-title">
            <h1>Детали Заказа</h1>
            <aside>Здесь вы можете отслеживать свои поссылки,если вы будуте использовать другие сервисы по
               трекингу посылок, то настоятельно рекомендуем проверять сервисы на взлом</aside>
         </div>
         <div class="zakaz-more">
            <div class="basket__hr"></div>
            <div class="zakaz-more__title">
               <p>Заказ № <span id="zakaz__num">{order.num}</span> </p>
            </div>
            <div class="zakaz-more__person">
               <div class="zakaz-more__person-item person__name">
                  <p id="person__name">Даниил Осипов(ввввв)</p>
               </div>
               <div class="zakaz-more__person-item person__email">
                  <p>Email: <span id="person__email">dan.osipov9999999999@mail.ru</span></p>
               </div>
               <div class="zakaz-more__person-item person__local">
                  <p>{order.local}</p>
               </div>
            </div>
            <div class="zakaz-more__summ">
               <div class="basket__hr"></div>
               <p>
                  Итого <span id="zakaz__price">{order.sum} $</span>
               </p>
               <div class="basket__hr"></div>
            </div>
            <ul class="zakaz-more__list">
               {order.products.map((item) => {
                  const product = products.filter((prod) => prod.id == item.product_id)[0]
                  return <AccountZakazMoreListItem product={product} amount={item.amout} />
               })}
            </ul>

         </div>
      </div>
   )
}
export default AccountZakazMore