import React from "react";
import { NavLink } from "react-router-dom"
function ProductsItem({ imgLink, name, price, color, id, product }) {
   return (
      <NavLink to='/product' state={{ product }} className="product__item">
         <div class="product__item-img">
            <img src={imgLink} alt="" />
         </div>
         <div class="product__item-supp">
            <h3 class="product__item-title">{name}</h3>
            <div class="product__item-text">
               <p>
                  Цвет: <span id="product__color">{color}</span>
               </p>
               <span class="product__item-price">{price} $</span>
            </div>
         </div>

      </NavLink>
   )
}

export default ProductsItem