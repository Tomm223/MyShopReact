import React from "react";
import { useContext } from "react";
import { AccountContext } from "../Context/AccountProvider";
import ProductsContext from "../Context/ProductsContext";
import AccountLikesItem from "./AccountLikesItem";
function AccountLikes() {
   /* {basket.map((item) => {
                        const product = products.filter((prod) => prod.id == item.product_id)[0]
                        return <AccountBasketItem product={product} amount={item.amount} size={item.size} />
                     })} */

   //
   const { cabInfo, likesPers, checkId, deleteLikes } = useContext(AccountContext)
   const likes = checkId ? likesPers : cabInfo.likes

   console.log("Mlikes: ", deleteLikes);
   console.log("likes: ", likes);
   //
   const { products } = useContext(ProductsContext)
   return (
      <div class="cab__like">
         <div class="cab__like-icon">
            <img src="/img/page-icon/icons8-love-24.png" alt="info" />
         </div>
         <div class="cab__like-title">
            <h1>Мое Избранное</h1>
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
                  {likes.map((item) => {
                     const deleteCheck = deleteLikes.filter((prod) => prod.likes_id == item.id)[0]
                     console.log("chehck: ", deleteCheck);
                     if (deleteCheck) { return console.log("deleteProduct: ", deleteCheck.likes_id) }
                     const product = products.filter((prod) => prod.id == item.product_id)[0]
                     console.log("product: ", product);
                     return <AccountLikesItem key={item.id} product={product} size={item.size} itemId={item.id} />
                  })}


               </ul>
               <div class="basket__btn">
                  <input class="basket__btn-item" type="button" value="Заказать" />
               </div>

            </div>
         </div>
      </div>
   )
}
export default AccountLikes