import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductsContext from "../Context/ProductsContext"
import Moda from "../Moda";
import ProductSuppImg from "./ProductSuppImg";
import { AuthContext } from "../Context/AuthProvider"
import { PagesContext } from "../Context/PagesProvider";
import { AccountContext } from "../Context/AccountProvider";
export default function Product() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()

   }, [])

   const location = useLocation()
   const [numImg, setnumImg] = useState(0)

   const product = location.state.product
   const imgs = product.imgs

   //add data server
   const { user } = useContext(AuthContext)
   const [myObj, setMyObj] = useState()

   // FOR MYLTI USERS
   /*
   async function HandlerBasket() {
      const responce = await fetch("http://localhost:3000/userChange")
      const resp = await responce.json()
      const userSearch = await resp.filter((item) => item.user_id == user.id)[0]
      await userSearch.basket.push({
         id: Math.random() * 11111,
         product_id: product.id,
         size: 44,
         amount: 1

      })
      const putUserChange = await fetch("http://localhost:3000/userChange", {
         method: 'POST',
         body: JSON.stringify(userSearch),
         headers: {
            "Content-type": "application/json",
            'Accept': 'application/json'
         }
      })
         .then(data => data.json())
         .then(data => console.log(data))
   }*/
   const { ADDrenderProducts, usSetChangeBasket, usSetChangeLikes } = useContext(AccountContext)
   async function HandlerButton(category) {
      const addObj = await category == "basket" ? {
         //id: Math.random() * 11111, сервер делает лучше id
         product_id: product.id,
         size: 44,
         amount: 1

      } : {
         //id: Math.random() * 11111, сервер делает лучше id
         product_id: product.id,
         amount: 1

      }
      fetch(`http://localhost:3000/${category}Change`, {
         method: 'POST',
         body: JSON.stringify(addObj),
         headers: {
            "Content-type": "application/json"
         }
      })
         .then(data => data.json())
         .then(data => {
            if (category == "basket") {
               ADDrenderProducts('basketChange', usSetChangeBasket)
            }
            else {
               ADDrenderProducts('likesChange', usSetChangeLikes)
            }
         })
         .then()


   }
   return (
      <>
         <div class="profile">
            <div class="container">
               <div class="profile__block">
                  <div class="profile__fotos">
                     <div class="profile__img">
                        <img className="profile__img-item" src={imgs[numImg]} alt="" />
                        <div class="profile__img-left">
                           <img src="/img/page-icon/down-arrow.png" alt="предыдущая фотография" />
                        </div>
                        <div class="profile__img-right">
                           <img src="/img/page-icon/down-arrow.png" alt="следующая фотография" />
                        </div>
                     </div>
                     <div class="profile__fotos-supp">
                        {imgs.map((img, index) => {
                           return (<ProductSuppImg key={index} id={index} numImg={numImg} imgLink={img} />)
                        })}


                        <div class="profile__img-left">
                           <img src="/img/page-icon/down-arrow.png" alt="предыдущая фотография" />
                        </div>
                        <div class="profile__img-right">
                           <img src="/img/page-icon/down-arrow.png" alt="следующая фотография" />
                        </div>
                     </div>
                  </div>
                  <div class="profile__buy">
                     <ul class="profile__list">
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h3 class="profile__name" id="product__name">
                                 {product.product_name} <span id="product__brand">{product.brand}</span>
                              </h3>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h4>
                                 Цена: <span id="product__price">{product.price}</span>$
                              </h4>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h4>Цвет: <span id="product__cvet">{product.color}</span></h4>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h4 class="profile__list-sizeP">Pазмер:</h4>
                              <select name="size" class="profile__list-sellect" id="product__size">
                                 <option class="profile__list-option" value="default">Пожалуйста, Выберите</option>
                                 <option class="profile__list-option" value="42">42</option>
                                 <option class="profile__list-option" value="44">44</option>
                                 <option class="profile__list-option" value="48">48</option>
                                 <option class="profile__list-option" value="52">52</option>
                              </select>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <button onClick={() => HandlerButton("basket")} class="profile__btn-basket" type="button"  >
                                 <img src="/img/page-icon/basket.png" alt="" />
                                 Добавить в Корзину</button>
                           </div>
                           <div className="profile__like-block">
                              <button onClick={() => HandlerButton("likes")} type="button" className="profile__btn-like"><img src="/img/page-icon/circle-love-50.png" alt="" /></button>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="profile__info">
                  <div class="profile__info-title">
                     <h2>Информация о Товаре:</h2>
                  </div>
                  <div class="profile__info-block">
                     <ul class="profile__info-list">
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">{product.material}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">{product.brand}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">{product.color}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">{product.material}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">{product.brand}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">{product.color}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">{product.material}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">{product.brand}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">{product.color}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">{product.material}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">{product.brand}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">{product.color}</span>
                           </p>
                        </li>

                     </ul>
                  </div>
               </div>
            </div>
            <Moda />
         </div>
      </>
   )
}

