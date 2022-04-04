import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import { useContext } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useWindowSize } from '../../hook/useWindowSize'

import { Sales_Selector } from "../../Filtres/ProductSelections";
import ProductsContext from "../../Context/ProductsContext";
import AccountLikesItem from "./AccountLikesItem";
import { useSelector } from "react-redux";
import AccountOut from '../UI/Account/AccountOut'
import { LoadingDefault } from "../UI/Loading/Loadings";
import { useNavigateParams } from "../../hook/useSearchParams";
import { SEARCH_LUXERY, SEARCH_SALES } from "../../Filtres/TypesSearch";

function AccountLikes() {
   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon, minBigAcc } = useWindowSize()


   const products = useSelector(state => state.products.products)
   const likes = useSelector(state => state.account.likes)
   const user = useSelector(state => state.user.user)

   // maked  timemout for load
   const [timeOUT, setTimeOUT] = useState(true)
   useEffect(() => {
      makeTimeOut()
   }, [])
   function makeTimeOut() {
      return setTimeout(() => {
         setTimeOUT(false)
      }, 500)
   }

   //ПОДБРОКА ДЛЯ ПЕРЕХОДА В CATALOGE
   const salesCollection = Sales_Selector()
   const navigateParams = useNavigateParams()



   return (
      <>
         {minBigAcc && <AccountOut />}

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
                  {timeOUT && <div className="d-flex justify-content-center">
                     <LoadingDefault />
                  </div>}
                  <TransitionGroup class="basket__list">
                     {!timeOUT &&
                        likes.map((item) => {
                           const product = products.find((prod) => prod.id == item.product_id)
                           return (
                              <CSSTransition
                                 key={item.id}
                                 timeout={500}
                                 classNames="productPost"
                              >
                                 <AccountLikesItem userID={user.id} item={item} key={item.id} product={product} size={item.size} itemId={item.id} />
                              </CSSTransition>
                           )
                        })
                     }
                  </TransitionGroup>
                  <div class="basket__btn">
                     <NavLink to={'/cataloge?products=ф'} >
                        <input class="basket__btn-item" type="button" value="Выбрать еще" />
                     </NavLink>
                  </div>

               </div>
            </div>
         </div>
      </>

   )
}
export default AccountLikes

//    <NavLink to={`/cataloge?collection=${SEARCH_SALES}`} state={{ collection: salesCollection }}>


//       <NavLink to={'/cataloge?products=ф'} >



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