import React from "react";
import { useContext, useEffect } from 'react'
import { PagesContext } from "./Context/PagesProvider";

function Cataloge() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])

   return (
      <>
         <div class="feture catalog">
            <div class="container">
               <div class="feture__title">
                  <h2>Мы рекомендуем</h2>
                  <span>Обнови гардероб! Покупай товары по нашим рекомендациям</span>
                  <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet dolorum natus recusandae,
                     dignissimos expedita laboriosam voluptatum numquam fuga veniam cum maxime totam unde fugit dolor quia
                     necessitatibus vel animi quis voluptatibus dolores soluta fugiat! Ipsa cum praesentium doloremque.
                     Expedita, accusamus laudantium cupiditate perferendis magnam saepe inventore sed, sunt iusto tempora
                     consectetur. Alias mollitia doloremque libero optio fugiat cupiditate odit amet expedita maxime
                     aspernatur repellat modi accusamus tempora rerum id repudiandae aliquam similique, fugit laborum. Quam
                     doloremque minus quidem soluta odio veniam placeat tenetur, omnis magnam corrupti modi dicta repellat
                     officia tempore sequi debitis assumenda, maxime tempora perspiciatis, iusto eum ex? Expedita
                     laboriosam, quisquam similique repellat quibusdam obcaecati ullam cum a, id suscipit quia eligendi
                     earum voluptas modi velit eos sed? Molestiae quia quasi saepe nihil tempora laboriosam odit aliquam a
                     similique enim voluptatem asperiores perspiciatis vero maxime provident excepturi debitis ut rerum
                     eveniet consequuntur minus impedit officiis, beatae quibusdam. Quasi saepe alias, natus nihil ipsa
                     consequuntur non facilis consectetur! Harum dicta id voluptatibus dignissimos nisi neque repellendus
                     accusantium optio nobis vero voluptatum similique officiis esse minus ut, alias obcaecati temporibus
                     impedit consectetur maxime aut provident. Nostrum quae, iusto est, nam provident cupiditate nemo sit
                     fugit quos odio fuga deleniti!</span>
               </div>
            </div>
         </div>
         <div class="filter">
            <ul class="filter__list">
               <li class="filter__list-item">
                  <div class="filter__item">
                     <p>Распродажа</p>
                     <div class="filter__option">
                        <div class="filter__option-filter">
                           <div class="filter__option-block">
                              <p class="filter__option-span">Выбрано: <span> 5</span></p>
                           </div>
                           <input class="filter__option-btn" type="button" value="Выбрать" />
                        </div>
                        <ul class="filter__option-list">
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Dcё</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>

                        </ul>
                     </div>
                  </div>
               </li>
               <li class="filter__list-item">
                  <div class="filter__item">
                     <p>Распродажа</p>
                     <div class="filter__option">
                        <div class="filter__option-filter">
                           <div class="filter__option-block">
                              <p class="filter__option-span">Выбрано: <span> 5</span></p>
                           </div>
                           <input class="filter__option-btn" type="button" value="Выбрать" />
                        </div>
                        <ul class="filter__option-list">
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Dcё</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>

                        </ul>
                     </div>
                  </div>
               </li>
               <li class="filter__list-item">
                  <div class="filter__item">
                     <p>Распродажа</p>
                     <div class="filter__option">
                        <div class="filter__option-filter">
                           <div class="filter__option-block">
                              <p class="filter__option-span">Выбрано: <span> 5</span></p>
                           </div>
                           <input class="filter__option-btn" type="button" value="Выбрать" />
                        </div>
                        <ul class="filter__option-list">
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Dcё</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>

                        </ul>
                     </div>
                  </div>
               </li>
               <li class="filter__list-item">
                  <div class="filter__item">
                     <p>Распродажа</p>
                     <div class="filter__option">
                        <div class="filter__option-filter">
                           <div class="filter__option-block">
                              <p class="filter__option-span">Выбрано: <span> 5</span></p>
                           </div>
                           <input class="filter__option-btn" type="button" value="Выбрать" />
                        </div>
                        <ul class="filter__option-list">
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Dcё</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>

                        </ul>
                     </div>
                  </div>
               </li>
               <li class="filter__list-item">
                  <div class="filter__item">
                     <p>Распродажа</p>
                     <div class="filter__option">
                        <div class="filter__option-filter">
                           <div class="filter__option-block">
                              <p class="filter__option-span">Выбрано: <span> 5</span></p>
                           </div>
                           <input class="filter__option-btn" type="button" value="Выбрать" />
                        </div>
                        <ul class="filter__option-list">
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Dcё</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>

                        </ul>
                     </div>
                  </div>
               </li>
               <li class="filter__list-item">
                  <div class="filter__item">
                     <p>Распродажа</p>
                     <div class="filter__option">
                        <div class="filter__option-filter">
                           <div class="filter__option-block">
                              <p class="filter__option-span">Выбрано: <span> 5</span></p>
                           </div>
                           <input class="filter__option-btn" type="button" value="Выбрать" />
                        </div>
                        <ul class="filter__option-list">
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Dcё</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>

                        </ul>
                     </div>
                  </div>
               </li>
               <li class="filter__list-item">
                  <div class="filter__item">
                     <p>Распродажа</p>
                     <div class="filter__option">
                        <div class="filter__option-filter">
                           <div class="filter__option-block">
                              <p class="filter__option-span">Выбрано: <span> 5</span></p>
                           </div>
                           <input class="filter__option-btn" type="button" value="Выбрать" />
                        </div>
                        <ul class="filter__option-list">
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Dcё</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>

                        </ul>
                     </div>
                  </div>
               </li>
               <li class="filter__list-item">
                  <div class="filter__item">
                     <p>Распродажа</p>
                     <div class="filter__option">
                        <div class="filter__option-filter">
                           <div class="filter__option-block">
                              <p class="filter__option-span">Выбрано: <span> 5</span></p>
                           </div>
                           <input class="filter__option-btn" type="button" value="Выбрать" />
                        </div>
                        <ul class="filter__option-list">
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Dcё</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>

                        </ul>
                     </div>
                  </div>
               </li>
               <li class="filter__list-item">
                  <div class="filter__item">
                     <p>Распродажа</p>
                     <div class="filter__option">
                        <div class="filter__option-filter">
                           <div class="filter__option-block">
                              <p class="filter__option-span">Выбрано: <span> 5</span></p>
                           </div>
                           <input class="filter__option-btn" type="button" value="Выбрать" />
                        </div>
                        <ul class="filter__option-list">
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Dcё</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>
                           <li class="filter__option-item">
                              <a class="filter__option-link" href="#">Распродажа</a>
                           </li>

                        </ul>
                     </div>
                  </div>
               </li>
               <li class="filter__list-item">
                  <input type="button" class="filter__search active" value="Искать" />
               </li>
            </ul>

         </div>

         <div class="feture">
            <div class="container">
               <div class="feture__how">
                  <p>Найдено товаров: <span></span></p>
               </div>
            </div>
            <div class="product">
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
            </div>
            <div class="product-btn">
               <input class="product-btn__item" type="button" value="Загрузить ещё" />
            </div>
         </div>
      </>
   )
}
export default Cataloge 