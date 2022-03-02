import React, { useContext, useEffect, useState } from "react";
import Moda from "../Moda"
import { Outlet } from "react-router-dom";
import ProductsList from "../Products/ProductsList";
import GenderGallery from './GenderGallery'
import { PagesContext } from "../../Context/PagesProvider";
import ProductsContext from '../../Context/ProductsContext'
function Gender() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])
   const { products } = useContext(ProductsContext)
   const { gallery } = useContext(PagesContext)
   return (
      <>
         <Outlet />
         <GenderGallery gallery={gallery} />
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