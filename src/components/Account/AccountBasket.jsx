import React, { useContext, useEffect, useMemo } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import ProductsContext from "../../Context/ProductsContext";
import AccountBasketItem from "./AccountBasketItem";
import { AuthContext } from "../../Context/AuthProvider";
function AccountBasket() {
   // massiv в котором TRUEBasket
   const MAss = []
   console.log(MAss);
   const { renderProducts, AddTopDelBottom, usSetChangeOrder, usSetDeleteBasket } = useContext(AccountContext)

   const basket = "" // ТО ГДЕ ЛЕЖИТ МАССИВ BASKETCAHNGE

   const { products } = useContext(ProductsContext)
   const { user } = useContext(AuthContext)





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

               </ul>
               <div class="basket__btn">
                  <input class="basket__btn-item" type="button" value="Заказать" />
               </div>

            </div>
         </div>
      </div>
   )
}
export default AccountBasket

/* ////////////////////////КНОПКА: ИЗ ВАSКЕТ ТО ORDER 


onClick={() => MAss.length && AddTopDelBottom("orderChange", usSetChangeOrder, basketToOrder, "DeleteBasket", usSetDeleteBasket, DeleteProduct())}


   //////////////////////ФУНКЦИИ КОТОРЫЕ УДАЛЯЛИ ИЛИ :ТО ORDER

const basketToOrder = {
      send: basket.length == 2 ? false : true,
      num: Math.random() * 111111111111,
      local: `${user.address.country}, ${user.address.city}, ${user.address.street}, ${user.address.house} `,
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

*/

/*
ВЫВОД ТОВАРОВ
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

*/