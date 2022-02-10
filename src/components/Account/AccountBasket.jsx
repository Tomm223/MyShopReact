import React from "react";
function AccountBasket() {
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
            <div class="basket__title">
               <h3>Список Товаров</h3>
            </div>
            <div class="basket__block">
               <ul class="basket__list">
                  <li class="basket__item">
                     <div class="basket__product">
                        <div class="basket__product-img">
                           <img src="/img/sniker/sniker5-1.jpg" alt="" />
                        </div>
                        <div class="basket__product-supp">
                           <div class="basket__product-title">
                              <p id="product__name">Черные Мужские Кроссивки Nike</p>
                           </div>
                           <ul class="basket__product-list">

                              <div class="basket__product-item">
                                 <h4>Цвет: <span id="product__cvet">Хаки</span></h4>
                              </div>
                              <div class="basket__product-item">
                                 <p>
                                    Цена: <span id="product__price">330</span>$
                                 </p>
                              </div>
                              <div class="basket__product-item">
                                 <div class="profile__list-block">
                                    <div class="">
                                       <h4 class="profile__list-sizeP">Pазмер:</h4>
                                    </div>

                                    <select name="size" class="profile__list-sellect" id="product__size">
                                       <option class="profile__list-option" value="default ">Пожалуйста, Выберите
                                       </option>
                                       <option class="profile__list-option" value="42">42</option>
                                       <option class="profile__list-option" value="44">44</option>
                                       <option class="profile__list-option" value="48">48</option>
                                       <option class="profile__list-option" value="52">52</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="basket__product-item">
                                 <div class="profile__list-block">
                                    <h4 class="profile__list-sizeP">Колличестко:
                                    </h4>
                                    <select name="size" class="profile__list-sellect" id="product__summ">
                                       <option class="profile__list-option" value="default ">Пожалуйста, Выберите
                                       </option>
                                       <option class="profile__list-option" value="1">1</option>
                                       <option class="profile__list-option" value="2">2</option>
                                       <option class="profile__list-option" value="3">3</option>
                                       <option class="profile__list-option" value="4">4</option>
                                    </select>
                                 </div>
                              </div>
                           </ul>
                           <div class="basket__product-delete">
                              <img src="/img/page-icon/icons8-close-24.png" alt="" />
                           </div>
                        </div>
                     </div>
                  </li>
                  <li class="basket__item">
                     <div class="basket__product">
                        <div class="basket__product-img">
                           <img src="/img/sniker/sniker5-1.jpg" alt="" />
                        </div>
                        <div class="basket__product-supp">
                           <div class="basket__product-title">
                              <p id="product__name">Черные Мужские Кроссивки Nike</p>
                           </div>
                           <ul class="basket__product-list">

                              <div class="basket__product-item">
                                 <h4>Цвет: <span id="product__cvet">Хаки</span></h4>
                              </div>
                              <div class="basket__product-item">
                                 <p>
                                    Цена: <span id="product__price">330</span>$
                                 </p>
                              </div>
                              <div class="basket__product-item">
                                 <div class="profile__list-block">
                                    <div class="">
                                       <h4 class="profile__list-sizeP">Pазмер:</h4>
                                    </div>

                                    <select name="size" class="profile__list-sellect" id="product__size">
                                       <option class="profile__list-option" value="default ">Пожалуйста, Выберите
                                       </option>
                                       <option class="profile__list-option" value="42">42</option>
                                       <option class="profile__list-option" value="44">44</option>
                                       <option class="profile__list-option" value="48">48</option>
                                       <option class="profile__list-option" value="52">52</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="basket__product-item">
                                 <div class="profile__list-block">
                                    <h4 class="profile__list-sizeP">Колличестко:
                                    </h4>
                                    <select name="size" class="profile__list-sellect" id="product__summ">
                                       <option class="profile__list-option" value="default ">Пожалуйста, Выберите
                                       </option>
                                       <option class="profile__list-option" value="1">1</option>
                                       <option class="profile__list-option" value="2">2</option>
                                       <option class="profile__list-option" value="3">3</option>
                                       <option class="profile__list-option" value="4">4</option>
                                    </select>
                                 </div>
                              </div>
                           </ul>
                           <div class="basket__product-delete">
                              <img src="/img/page-icon/icons8-close-24.png" alt="" />
                           </div>
                        </div>
                     </div>
                  </li>
                  <li class="basket__item">
                     <div class="basket__product">
                        <div class="basket__product-img">
                           <img src="/img/sniker/sniker5-1.jpg" alt="" />
                        </div>
                        <div class="basket__product-supp">
                           <div class="basket__product-title">
                              <p id="product__name">Черные Мужские Кроссивки Nike</p>
                           </div>
                           <ul class="basket__product-list">

                              <div class="basket__product-item">
                                 <h4>Цвет: <span id="product__cvet">Хаки</span></h4>
                              </div>
                              <div class="basket__product-item">
                                 <p>
                                    Цена: <span id="product__price">330</span>$
                                 </p>
                              </div>
                              <div class="basket__product-item">
                                 <div class="profile__list-block">
                                    <div class="">
                                       <h4 class="profile__list-sizeP">Pазмер:</h4>
                                    </div>

                                    <select name="size" class="profile__list-sellect" id="product__size">
                                       <option class="profile__list-option" value="default ">Пожалуйста, Выберите
                                       </option>
                                       <option class="profile__list-option" value="42">42</option>
                                       <option class="profile__list-option" value="44">44</option>
                                       <option class="profile__list-option" value="48">48</option>
                                       <option class="profile__list-option" value="52">52</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="basket__product-item">
                                 <div class="profile__list-block">
                                    <h4 class="profile__list-sizeP">Колличестко:
                                    </h4>
                                    <select name="size" class="profile__list-sellect" id="product__summ">
                                       <option class="profile__list-option" value="default ">Пожалуйста, Выберите
                                       </option>
                                       <option class="profile__list-option" value="1">1</option>
                                       <option class="profile__list-option" value="2">2</option>
                                       <option class="profile__list-option" value="3">3</option>
                                       <option class="profile__list-option" value="4">4</option>
                                    </select>
                                 </div>
                              </div>
                           </ul>
                           <div class="basket__product-delete">
                              <img src="/img/page-icon/icons8-close-24.png" alt="" />
                           </div>
                        </div>
                     </div>
                  </li>


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