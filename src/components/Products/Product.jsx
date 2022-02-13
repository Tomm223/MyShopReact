import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductsContext from "../Context/ProductsContext"
import Moda from "../Moda";
import ProductSuppImg from "./ProductSuppImg";
import { PagesContext } from "../Context/PagesProvider";
export default function Product() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()

   }, [])

   const location = useLocation()
   const { products } = useContext(ProductsContext)
   const [numImg, setnumImg] = useState(0)

   const state = location.state
   const Massproduct = products.filter((item) => item.id == state.id)
   const product = Massproduct[0]
   const imgs = product.imgs

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
                                 Куртка Зимняя Крутая <span id="product__brand">Fred Perry</span>
                              </h3>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h4>
                                 Цена: <span id="product__price">330</span>$
                              </h4>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h4>Цвет: <span id="product__cvet">Хаки</span></h4>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h4 class="profile__list-sizeP">Pазмер:</h4>
                              <select name="size" class="profile__list-sellect" id="product__size">
                                 <option class="profile__list-option" value="default ">Пожалуйста, Выберите</option>
                                 <option class="profile__list-option" value="42">42</option>
                                 <option class="profile__list-option" value="44">44</option>
                                 <option class="profile__list-option" value="48">48</option>
                                 <option class="profile__list-option" value="52">52</option>
                              </select>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <input class="profile__btn" type="button" value="Добавить в Корзину" />
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
                              Материал: <span id="product__material">Пух</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">Fred Perry</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">Зеленый</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">Пух</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">Fred Perry</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">Зеленый</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">Пух</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">Fred Perry</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">Зеленый</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">Пух</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">Fred Perry</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">Зеленый</span>
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

