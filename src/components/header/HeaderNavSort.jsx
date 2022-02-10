import React from "react";

function HeaderNavSort(props) {
   return (
      <div>
         <div class="sort">
            <div class="sort__block">
               <div class="sort__title">
                  <h3>Сортировка по...{props.categor}</h3>
               </div>
               <div class="sort__list-block">
                  <ul class="sort__list">
                     <li class="sort__item">
                        <a href="#" class="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li class="sort__item">
                        <a href="#" class="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li class="sort__item">
                        <a href="#" class="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li class="sort__item">
                        <a href="#" class="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li class="sort__item">
                        <a href="#" class="sort__link">
                           Распродажа
                        </a>
                     </li>
                     <li class="sort__item">
                        <a href="#" class="sort__link">
                           Распродажа
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="sort__item-block">
               <h3 class="sort__item-title">Начните гардероб с представленных товаров</h3>
               <div class="gallery__item ">
                  <img class="gallery__item-img" src="../src/img/page-img/intro-men-jacket.jpg" alt="img-jacket" />
                  <div class="gallery__item-title">
                     Куртки и Пальто
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default HeaderNavSort