import React from "react";

function AccountBasketItem({ product, amount, size }) {
   return (
      <li class="basket__item">
         <div class="basket__product">
            <div class="basket__product-img">
               <img src={product.img_product} alt="" />
            </div>
            <div class="basket__product-supp">
               <div class="basket__product-title">
                  <p id="product__name">{product.product_name}</p>
               </div>
               <ul class="basket__product-list">

                  <div class="basket__product-item">
                     <h4>Цвет: <span id="product__cvet">{product.color}</span></h4>
                  </div>
                  <div class="basket__product-item">
                     <p>
                        Цена: <span id="product__price">{product.price}</span>$
                     </p>
                  </div>
                  <div class="basket__product-item">
                     <div class="profile__list-block">
                        <div class="">
                           <h4 class="profile__list-sizeP">Pазмер:</h4>
                        </div>

                        <select name="size" class="profile__list-sellect" id="product__size">
                           <option class="profile__list-option" value={size}>{size}
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
                           <option class="profile__list-option" value={amount}>{amount}
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
   )
}

export default AccountBasketItem