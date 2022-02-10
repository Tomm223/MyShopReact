import React, { useContext, useEffect, useState } from "react";
import Moda from "./Moda"
import { Outlet } from "react-router-dom";
import ProductsList from "./Products/ProductsList";
import ProductsContext from "./Context/ProductsContext";
function Gender() {
   /*  <div class="product">
               <div class="container">
                  <div class="product__block">
                     <div class="product__item">
                        <div class="product__item-img">
                           <img src="/img/jacket/jacket1.jpg" alt="" />
                        </div>
                        <div class="product__item-supp">
                           <h3 class="product__item-title">Красная Мужская Куртка The North Face</h3>
                           <div class="product__item-text">
                              <p>
                                 Цвет: <span id="product__color">Красный</span>
                              </p>
                              <span class="product__item-price">559$</span>
                           </div>
                        </div>

                     </div>
                     <div class="product__item">
                        <div class="product__item-img">
                           <img src="/img/jacket/jacket1.jpg" alt="" />
                        </div>
                        <div class="product__item-supp">
                           <h3 class="product__item-title">Красная Мужская Куртка The North Face</h3>
                           <div class="product__item-text">
                              <p>
                                 Цвет: <span id="product__color">Красный</span>
                              </p>
                              <span class="product__item-price">559$</span>
                           </div>
                        </div>
                     </div>
                     <div class="product__item">
                        <div class="product__item-img">
                           <img src="/img/jacket/jacket1.jpg" alt="" />
                        </div>
                        <div class="product__item-supp">
                           <h3 class="product__item-title">Красная Мужская Куртка The North Face</h3>
                           <div class="product__item-text">
                              <p>
                                 Цвет: <span id="product__color">Красный</span>
                              </p>
                              <span class="product__item-price">559$</span>
                           </div>
                        </div>
                     </div>
                     <div class="product__item">
                        <div class="product__item-img">
                           <img src="/img/jacket/jacket1.jpg" alt="" />
                        </div>
                        <div class="product__item-supp">
                           <h3 class="product__item-title">Красная Мужская Куртка The North Face</h3>
                           <div class="product__item-text">
                              <p>
                                 Цвет: <span id="product__color">Красный</span>
                              </p>
                              <span class="product__item-price">559$</span>
                           </div>
                        </div>
                     </div>
                     <div class="product__item">
                        <div class="product__item-img">
                           <img src="/img/jacket/jacket1.jpg" alt="" />
                        </div>
                        <div class="product__item-supp">
                           <h3 class="product__item-title">Красная Мужская Куртка The North Face</h3>
                           <div class="product__item-text">
                              <p>
                                 Цвет: <span id="product__color">Красный</span>
                              </p>
                              <span class="product__item-price">559$</span>
                           </div>
                        </div>
                     </div>
                     <div class="product__item">
                        <div class="product__item-img">
                           <img src="/img/jacket/jacket1.jpg" alt="" />
                        </div>
                        <div class="product__item-supp">
                           <h3 class="product__item-title">Красная Мужская Куртка The North Face</h3>
                           <div class="product__item-text">
                              <p>
                                 Цвет: <span id="product__color">Красный</span>
                              </p>
                              <span class="product__item-price">559$</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */

   const [db, setDb] = useState([])
   const { products } = useContext(ProductsContext)
   setDb(products)
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
                  <a href="#" class="gallery__link">Купить</a>
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
            <ProductsList db={db} />

         </div>
      </>
   )
}
export default Gender