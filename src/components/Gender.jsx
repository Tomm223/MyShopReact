import React, { useContext, useEffect, useState } from "react";
import Moda from "./Moda"
import { Outlet } from "react-router-dom";
import ProductsList from "./Products/ProductsList";
import ProductsContext from "./Context/ProductsContext";
import { PagesContext } from "./Context/PagesProvider";
function Gender() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])

   const { products } = useContext(ProductsContext)



   return (
      <>
         <Outlet />
         <div class="gallery">
            <div class="container">
               <div class="gallery__title">Выберите категорию</div>
               <div class="gallery__block">
                  <div class="gallery__item">
                     <img class="gallery__item-img" src="/img/page-img/intro-men-jacket.jpg" alt="img-jacket" />
                     <div class="gallery__item-title">
                        Куртки и Пальто
                     </div>
                  </div>
                  <div class="gallery__item">
                     <img class="gallery__item-img" src="/img/page-img/intro-men-bruki.jpg" alt="img-jacket" />
                     <div class="gallery__item-title">
                        Брюки
                     </div>
                  </div>
                  <div class="gallery__item">
                     <img class="gallery__item-img" src="/img/page-img/intro-men-rasprod.jpg" alt="img-jacket" />
                     <div class="gallery__item-title">
                        Распродажа
                     </div>
                  </div>
                  <div class="gallery__item">
                     <img class="gallery__item-img" src="/img/page-img/intro-men-snikers.jpg" alt="img-jacket" />
                     <div class="gallery__item-title">
                        Кроссовки
                     </div>
                  </div>
                  <div class="gallery__item">
                     <img class="gallery__item-img" src="/img/page-img/intro-men-t-shirt.jpg" alt="img-jacket" />
                     <div class="gallery__item-title">
                        Футболки
                     </div>
                  </div>
                  <div class="gallery__item">
                     <img class="gallery__item-img" src="/img/page-img/intro-men-rubash.jpg" alt="img-jacket" />
                     <div class="gallery__item-title">
                        Рубашки
                     </div>
                  </div>
               </div>
               <div class="gallery__btn">
                  <p class="gallery__link">Купить</p>
               </div>
            </div>
         </div>
         <Moda />
         <div class="feture">
            <div class="container">
               <div class="feture__title">
                  <h2>Мы рекомендуем</h2>
                  <span>Обнови гардероб! Покупай товары по нашим рекомендациям</span>
               </div>
            </div>
            <ProductsList products={products} />

         </div>
      </>
   )
}
export default Gender