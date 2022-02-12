import React, { useContext, useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";

function ProductsList({ products }) {


   /*  {products.map((item) => {
                     return (<ProductsItem id={item.id} key={item.id} imgLink={item.img_product} name={item.product_name} price={item.price} color={item.color} />)

                  })}*/
   return (
      <div>
         <div class="product">
            <div class="container">
               <div className="product__block">



               </div>
            </div>
            <div class="product-btn">
               <input class="product-btn__item" type="button" value="Загрузить ещё" />
            </div>
         </div>
      </div>
   )
}
export default ProductsList