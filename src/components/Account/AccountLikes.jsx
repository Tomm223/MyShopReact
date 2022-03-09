import React from "react";
import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import ProductsContext from "../../Context/ProductsContext";
import AccountLikesItem from "./AccountLikesItem";
import { AuthContext } from "../../Context/AuthProvider";
function AccountLikes() {
   /* {basket.map((item) => {
                        const product = products.filter((prod) => prod.id == item.product_id)[0]
                        return <AccountBasketItem product={product} amount={item.amount} size={item.size} />
                     })} */

   //
   const { userChange } = useContext(AccountContext)
   const likes = userChange.likes.reverse()
   //user
   const { user } = useContext(AuthContext)
   const { products } = useContext(ProductsContext)
   // СДЕЛАТЬ ЛУЧШЕ ВЫВЕДЕНИЕ ПОДБОРКИ В ОТДЕЛЬНЫЙ КОМПОНЕНТ ПОДБОРКИ ПОЛОЖИТЬ
   const salesFilter = products.filter((item) => item.sales == "true")
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
                     const product = products.find((prod) => prod.id == item.product_id)
                     return <AccountLikesItem userID={user.id} item={item} key={item.id} product={product} size={item.size} itemId={item.id} />
                  })}
               </ul>
               <div class="basket__btn">
                  <NavLink to="/cataloge?collection=sales" state={{ collection: salesFilter }}>
                     <input class="basket__btn-item" type="button" value="Выбрать еще" />
                  </NavLink>
               </div>

            </div>
         </div>
      </div>
   )
}
export default AccountLikes



/*

  { ///////////СПИСОК ТОВАРОВ В LIKES

   
                     checkId ?
                        likes.map((item) => {
                           const deleteCheck = deleteLikes.filter((prod) => prod.likes_id == item.id)[0]
                           console.log("chehck: ", deleteCheck);
                           if (deleteCheck) { return console.log("deleteProduct: ", deleteCheck.likes_id) }
                           const product = products.filter((prod) => prod.id == item.product_id)[0]
                           console.log("product: ", product);
                           return <AccountLikesItem key={item.id} product={product} size={item.size} itemId={item.id} />
                        })

                        :

                        likes.map((item) => {

                           const product = products.filter((prod) => prod.id == item.product_id)[0]
                           return <AccountLikesItem key={item.id} product={product} size={item.size} itemId={item.id} />
                        })

                  }

*/