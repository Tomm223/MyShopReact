import React, { useContext, useEffect } from "react";
import { AccountContext } from "../Context/AccountProvider";
import ProductsContext from "../Context/ProductsContext";
import AccountBasketItem from "./AccountBasketItem";
function AccountBasket() {
   //
   const { cabInfo } = useContext(AccountContext)
   const basket = cabInfo.basket
   console.log("basket: ", basket);
   //
   const { products } = useContext(ProductsContext)
   console.log(products);

   /*{basket.map((item) => {
                     const product = products.filter((item) => item.id == item.product_id)[0]
                     return <AccountBasketItem product={product} amount={item.amount} size={item.size} />
                  })} */

   function BasketToOrder() {

   }
   return (
      <div class="cab__basket">
         <div class="cab__basket-icon">
            <img src="/img/page-icon/basket.png" alt="info" />
         </div>
         <div class="cab__basket-title">
            <h1>Моя Корзина</h1>
            <aside>Вы в любой момент можете изменить харакитеристики вашей корзины, а также применить промокод
               (применение промокода только на один заказ).</aside>
         </div>

         <div class="basket ">
            <div class="basket__hr"></div>
            <div class="basket__title">
               <h3>Список Товаров</h3>
            </div>
            <div class="basket__block">
               <ul class="basket__list">
                  {basket.map((item) => {
                     const product = products.filter((prod) => prod.id == item.product_id)[0]
                     console.log("product1: ", product);
                     return <AccountBasketItem product={product} amount={item.amount} size={item.size} />
                  })}
               </ul>
               <div class="basket__btn">
                  <input onClick={BasketToOrder} class="basket__btn-item" type="button" value="Заказать" />
               </div>

            </div>
         </div>
      </div>
   )
}
export default AccountBasket