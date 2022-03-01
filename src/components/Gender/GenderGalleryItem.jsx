import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { PagesContext } from "../Context/PagesProvider";
import ProductsContext from "../Context/ProductsContext";
function GenderGalleryItem({ filter, img, title }) {
   const [Filter, setFilter] = useState()
   const { products } = useContext(ProductsContext)
   const { setCategory, setBasic, searchForFilter, DELETEFiltresState } = useContext(PagesContext)
   useEffect(() => {
      if (filter == 'sales') {
         setFilter(products.filter((item) => item.sales == "true"))
      }
      else {
         setFilter(products.filter((item) => item.filter_name == filter))
      }
   }, [])
   console.log(`${filter}: `, Filter);

   const [searchParams, setSearchParams] = useSearchParams()
   const navigate = useNavigate()
   function handlerClick() {
      navigate(`/cataloge?collection=${filter}`, { state: { collection: Filter } })
   }
   // finishFilter  state={{ FilterSearch: Filter }}
   return (
      <div onClick={handlerClick} class="gallery__item">
         <img class="gallery__item-img" src={img} alt="img-jacket" />
         <div class="gallery__item-title">
            {title}
         </div>
      </div >

   )
}
export default GenderGalleryItem