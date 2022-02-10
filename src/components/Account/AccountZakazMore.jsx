import React from "react";
function AccountZakazMore() {
   return (
      <div class="cab__zakaz-more">
         <div class="cab__zakaz-more-icon">
            <img src="../src/img/page-icon/zakaz.png" alt="info" />
         </div>
         <div class="cab__zakaz-more-title">
            <h1>Детали Заказа</h1>
            <aside>Здесь вы можете отслеживать свои поссылки,если вы будуте использовать другие сервисы по
               трекингу посылок, то настоятельно рекомендуем проверять сервисы на взлом</aside>
         </div>
         <div class="zakaz-more">
            <div class="basket__hr"></div>
            <div class="zakaz-more__title">
               <p>Заказ № <span id="zakaz__num">GHRDU12FNS002YW</span> </p>
            </div>
            <div class="zakaz-more__person">
               <div class="zakaz-more__person-item person__name">
                  <p id="person__name">Даниил Осипов(ввввв)</p>
               </div>
               <div class="zakaz-more__person-item person__email">
                  <p>Email: <span id="person__email">dan.osipov9999999999@mail.ru</span></p>
               </div>
               <div class="zakaz-more__person-item person__local">
                  <p>г. Санкт-Петербург просп. Юниоров дом 6</p>
               </div>
            </div>
            <div class="zakaz-more__summ">
               <div class="basket__hr"></div>
               <p>
                  Итого <span id="zakaz__price">3 3456 $</span>
               </p>
               <div class="basket__hr"></div>
            </div>
            <ul class="zakaz-more__list">
               <div class="zakaz-more__list-item zakaz-more__product">
                  <div class="zakaz-more__product-blockImg">
                     <img src="../src/img/t-shirt/t-shirt2-1.jpg" class="zakaz-more__product-img" />
                  </div>
                  <div class="zakaz-more__product-blockSupp">
                     <div class="">
                        <p id="product__name">Белая Футболка</p>
                        <p>Бренд: <span id="product__brand">The North Face</span></p>
                     </div>
                     <div>
                        <p>Цвет: <span id="product__color">Белый</span></p>
                     </div>
                  </div>
                  <div class="zakaz-more__product-priceCall">
                     <p>Цена: <span id="product__price">560</span> $</p>
                     <p>Колличество: x<span id="product__call">1</span></p>
                  </div>
               </div>
               <div class="zakaz-more__list-item zakaz-more__product">
                  <div class="zakaz-more__product-blockImg">
                     <img src="../src/img/t-shirt/t-shirt2-1.jpg" class="zakaz-more__product-img" />
                  </div>
                  <div class="zakaz-more__product-blockSupp">
                     <div class="">
                        <p id="product__name">Белая Футболка</p>
                        <p>Бренд: <span id="product__brand">The North Face</span></p>
                     </div>
                     <div>
                        <p>Цвет: <span id="product__color">Белый</span></p>
                     </div>
                  </div>
                  <div class="zakaz-more__product-priceCall">
                     <p>Цена: <span id="product__price">560</span> $</p>
                     <p>Колличество: x<span id="product__call">1</span></p>
                  </div>
               </div>
               <div class="zakaz-more__list-item zakaz-more__product">
                  <div class="zakaz-more__product-blockImg">
                     <img src="../src/img/t-shirt/t-shirt2-1.jpg" class="zakaz-more__product-img" />
                  </div>
                  <div class="zakaz-more__product-blockSupp">
                     <div class="">
                        <p id="product__name">Белая Футболка</p>
                        <p>Бренд: <span id="product__brand">The North Face</span></p>
                     </div>
                     <div>
                        <p>Цвет: <span id="product__color">Белый</span></p>
                     </div>
                  </div>
                  <div class="zakaz-more__product-priceCall">
                     <p>Цена: <span id="product__price">560</span> $</p>
                     <p>Колличество: x<span id="product__call">1</span></p>
                  </div>
               </div>
               <div class="zakaz-more__list-item zakaz-more__product">
                  <div class="zakaz-more__product-blockImg">
                     <img src="../src/img/t-shirt/t-shirt2-1.jpg" class="zakaz-more__product-img" />
                  </div>
                  <div class="zakaz-more__product-blockSupp">
                     <div class="">
                        <p id="product__name">Белая Футболка</p>
                        <p>Бренд: <span id="product__brand">The North Face</span></p>
                     </div>
                     <div>
                        <p>Цвет: <span id="product__color">Белый</span></p>
                     </div>
                  </div>
                  <div class="zakaz-more__product-priceCall">
                     <p>Цена: <span id="product__price">560</span> $</p>
                     <p>Колличество: x<span id="product__call">1</span></p>
                  </div>
               </div>
               <div class="zakaz-more__list-item zakaz-more__product">
                  <div class="zakaz-more__product-blockImg">
                     <img src="../src/img/t-shirt/t-shirt2-1.jpg" class="zakaz-more__product-img" />
                  </div>
                  <div class="zakaz-more__product-blockSupp">
                     <div class="">
                        <p id="product__name">Белая Футболка</p>
                        <p>Бренд: <span id="product__brand">The North Face</span></p>
                     </div>
                     <div>
                        <p>Цвет: <span id="product__color">Белый</span></p>
                     </div>
                  </div>
                  <div class="zakaz-more__product-priceCall">
                     <p>Цена: <span id="product__price">560</span> $</p>
                     <p>Колличество: x<span id="product__call">1</span></p>
                  </div>
               </div>
            </ul>

         </div>
      </div>
   )
}
export default AccountZakazMore