import React, { useContext } from "react";
import { AccountContext } from "../Context/AccountProvider";
import ProductsContext from "../Context/ProductsContext";
import AccountZakazItem from "./AccountZakazItem";
function AccountZakaz() {
   const { cabInfo, orderPers, checkId } = useContext(AccountContext)
   const order = checkId ? orderPers : cabInfo.order
   console.log(order);
   return (
      <div class="cab__zakaz active">
         <div class="cab__zakaz-icon">
            <img src="/img/page-icon/zakaz.png" alt="info" />
         </div>
         <div class="cab__zakaz-title">
            <h1>Мои Заказы</h1>
            <aside>Здесь вы можете отслеживать свои поссылки,если вы будуте использовать другие сервисы по
               трекингу посылок, то настоятельно рекомендуем проверять сервисы на взлом</aside>
         </div>
         <div class="zakaz">
            <div class="basket__hr"></div>
            <div class="zakaz__title">
               <h4>Все заказы</h4>
               <hr />
            </div>
            <div class="zakaz__block">
               <ul class="zakaz__list">
                  {order.map((item) => {
                     console.log(item.products);
                     return <AccountZakazItem order={item} productsOrder={item.products} />
                  })
                  }


               </ul>
            </div>
         </div>
      </div>
   )
}
export default AccountZakaz