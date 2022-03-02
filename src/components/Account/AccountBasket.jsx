import React, { useContext, useEffect, useMemo } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import ProductsContext from "../../Context/ProductsContext";
import AccountBasketItem from "./AccountBasketItem";
function AccountBasket() {
   // massiv в котором TRUEBasket
   const MAss = []
   console.log(MAss);
   const { renderProducts, cabInfo, basketPers, checkId, deleteBasket, AddTopDelBottom, usSetChangeOrder, usSetDeleteBasket } = useContext(AccountContext)
   const basket = checkId ? basketPers : cabInfo.basket
   console.log("basketPers: ", basketPers);
   console.log("basket: ", basket);
   const { products } = useContext(ProductsContext)
   console.log("basketDELETE: ", deleteBasket);


   const basketToOrder = {
      send: basket.length == 2 ? false : true,
      num: Math.random() * 111111111111,
      local: "Saint -Peterburg",
      sum: 4242,
      products: MAss
   }

   console.log(basketToOrder)
   const DeleteProduct = () => {
      const mass = []
      const trueBasket = basket.map((item) => {
         const deleteCheck = deleteBasket.filter((prod) => prod.basket_id == item.id)[0]
         console.log("chehck: ", deleteCheck);
         if (!deleteCheck) {
            mass.push({
               basket_id: item.id,
               amount: 1
            })
         }
      })

      return mass
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
            <div onClick={renderProducts} class="basket__title">
               <h3>Список Товаров</h3>
            </div>
            <div class="basket__block">
               <ul class="basket__list">
                  {
                     checkId ?
                        basket.map((item) => {
                           const deleteCheck = deleteBasket.filter((prod) => prod.basket_id == item.id)[0]
                           console.log("chehck: ", deleteCheck);
                           if (deleteCheck) { return console.log("deleteProduct: ", deleteCheck.basket_id) }
                           else { MAss.push(item) }
                           const product = products.filter((prod) => prod.id == item.product_id)[0]
                           console.log("product1: ", product);
                           return <AccountBasketItem product={product} amount={item.amount} size={item.size} itemId={item.id} />
                        })

                        :
                        basket.map((item) => {
                           const product = products.filter((prod) => prod.id == item.product_id)[0]
                           return <AccountBasketItem product={product} amount={item.amount} size={item.size} itemId={item.id} />
                        })

                  }
               </ul>
               <div class="basket__btn">
                  <input disabled={!checkId} onClick={() => MAss.length && AddTopDelBottom("orderChange", usSetChangeOrder, basketToOrder, "DeleteBasket", usSetDeleteBasket, DeleteProduct())} class="basket__btn-item" type="button" value="Заказать" />
               </div>

            </div>
         </div>
      </div>
   )
}
export default AccountBasket

