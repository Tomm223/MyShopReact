import React from "react";

function AccountZakazMoreListItem({ product, amount }) {
   return (
      <div class="zakaz-more__list-item zakaz-more__product">
         <div class="zakaz-more__product-blockImg">
            <img src={product.img_product} class="zakaz-more__product-img" />
         </div>
         <div class="zakaz-more__product-blockSupp">
            <div class="">
               <p id="product__name">{product.product_name}</p>
               <p>Бренд: <span id="product__brand">{product.brand}</span></p>
            </div>
            <div>
               <p>Цвет: <span id="product__color">{product.color}</span></p>
            </div>
         </div>
         <div class="zakaz-more__product-priceCall">
            <p>Цена: <span id="product__price">{product.price}</span> $</p>
            <p>Колличество: x<span id="product__call">{amount}</span></p>
         </div>
      </div>
   )
}
export default AccountZakazMoreListItem